import LabelField from "../LabelField";

import { useForm } from "react-hook-form";
import InputFieldError from "../InputFieldError";
import {
  useAddPickupLocationMutation,
  useGetEndLocationQuery,
  useGetStartLocationQuery,
} from "@/redux/features/location/locationApiSlice";
import { Button } from "../ui/button";
import { useState } from "react";

const PickupLocationForm = () => {
  const [parent, setParent] = useState<string>("");
  //   data for end point
  const { data } = useGetEndLocationQuery("") as any;
  const end_locations = data?.data;

  //   data for start point
  const { data: result } = useGetStartLocationQuery("") as any;
  const start_locations = result?.data;

  //   form submission
  const [addPickupLocation, options] = useAddPickupLocationMutation();
  //   hook form function
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //   form submission
  const onSubmit = async (data: any) => {
    await addPickupLocation({
      name: data.name,
      start_point_id: data.start_point,
      end_point_id: data.end_point,
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

              //   value={location}
              //   onChange={(e: any) => setLocation(e.target.value)}
            />

            <InputFieldError
              type={errors.name?.type as string}
              message_1="name is required!"
            />
          </div>
          <div className="col-12 mb-4">
            <LabelField>Select start point</LabelField>
            <select
              defaultValue={""}
              {...register("start_point", { required: parent ? false : true })}
              className="w-full appearance-none rounded-sm border py-2 px-3 leading-tight text-gray-700 shadow-none focus:ring-0"
              onChange={(e: any) => setParent(e.target.value)}>
              <option value="" disabled>
                Select End Point
              </option>
              {start_locations?.map((item: any, i: number) => (
                <option value={item?.id} key={item?.id}>
                  {item?.name}
                </option>
              ))}
              {/* <option value="male">male</option>
              <option value="other">other</option> */}
            </select>
            <InputFieldError
              type={errors.start_point?.type as string}
              message_1="Start Point or End Point  is required!"
            />
            <LabelField>Select End point</LabelField>
            <select
              defaultValue={""}
              {...register("end_point", { required: parent ? false : true })}
              className="w-full appearance-none rounded-sm border py-2 px-3 leading-tight text-gray-700 shadow-none focus:ring-0"
              onChange={(e: any) => setParent(e.target.value)}>
              <option value="" disabled>
                Select End Point
              </option>
              {end_locations?.map((item: any, i: number) => (
                <option value={item?.id} key={item?.id}>
                  {item?.name}
                </option>
              ))}
            </select>
            <InputFieldError
              type={errors.end_point?.type as string}
              message_1="Start Point or End Point  is required!"
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

export default PickupLocationForm;
