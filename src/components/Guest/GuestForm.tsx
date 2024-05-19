import React from "react";
import { useForm } from "react-hook-form";
import LabelField from "../LabelField";
import InputFieldError from "../InputFieldError";
import { Button } from "../ui/button";
import { useAddGuestMutation } from "@/redux/features/guest/guestApiSlice";

const GuestForm = () => {
  const [addGuest, options] = useAddGuestMutation();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //   form submission
  const onSubmit = async (data: any) => {
    await addGuest({
      name: data.name,
    });
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-12 mb-4">
            {/* Package Name */}
            <LabelField>Location Name</LabelField>
            <input
              className="w-full appearance-none rounded-sm border py-2 px-3 leading-tight text-gray-700 shadow-none focus:ring-0"
              {...register("name", { required: true })}
              placeholder="Location"
            />

            <InputFieldError
              type={errors.name?.type as string}
              message_1="name is required!"
            />
          </div>
        </div>
        <Button asChild>
          <input type="submit" className="cursor-pointer" />
        </Button>
      </form>
    </div>
  );
};

export default GuestForm;
