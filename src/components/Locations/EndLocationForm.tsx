import { useAddEndLocationMutation } from "@/redux/features/location/locationApiSlice";
import { useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "../InputField";
import InputFieldError from "../InputFieldError";
import LabelField from "../LabelField";
import { Button } from "../ui/button";

const EndLocationForm = () => {
  const [end_location, setEndLocation] = useState("");
  const [child_location, setChildLocation] = useState<any>([]);
  const handleSubPackage = () => {
    setChildLocation([
      ...child_location,
      { value: Date.now().toString(), name: "" },
    ]);
  };
  const [addEndLocation, options] = useAddEndLocationMutation();
  const { isError, isLoading } = options;
  const {
    register,
    reset,
    formState: { errors },
  } = useForm();
  const locationData = {
    name: end_location,
    child_locations: child_location?.map((item: any) => {
      return {
        name: item.name,
      };
    }),
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await addEndLocation(locationData);
    reset();
  };

  return (
    <div className="mb-4">
      <form onSubmit={handleSubmit}>
        <div className="col-12 mb-4">
          {/* Package Name */}
          <LabelField>Location Name</LabelField>
          <InputField
            {...register("name", { required: true })}
            placeholder="Location"
            name="name"
            value={end_location}
            onChange={(e: any) => setEndLocation(e.target.value)}
          />
          <InputFieldError
            type={errors.name?.type as string}
            message_1="name is required!"
          />
        </div>
        {child_location.length > 0 &&
          child_location.map((item: any, i: number) => (
            <div className="col-12 mb-4" key={item.value}>
              {/* Package Name */}
              <LabelField>Child Location {i + 1}</LabelField>
              <InputField
                {...register("name", { required: true })}
                placeholder="Name"
                name="name"
                onChange={(e: any) => {
                  const data = child_location.map((i: any) => {
                    return {
                      ...i,
                      name: i.value === item.value ? e.target.value : i.name,
                    };
                  });
                  setChildLocation(data);
                }}
              />
              <InputFieldError
                type={errors.name?.type as string}
                message_1="name is required!"
              />
            </div>
          ))}
        <Button
          type="button"
          onClick={handleSubPackage}
          className="w-full"
          variant="outline">
          <span>+</span> Add Child Location
        </Button>
        <Button className="mt-4">Submit</Button>
      </form>
    </div>
  );
};

export default EndLocationForm;
