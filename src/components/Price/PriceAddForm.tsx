import { useGetGuestQuery } from "@/redux/features/guest/guestApiSlice";
import LabelField from "../LabelField";

import { useForm } from "react-hook-form";
import InputFieldError from "../InputFieldError";
import {
  useAddPickupLocationMutation,
  useGetEndLocationQuery,
  useGetStartLocationQuery,
} from "@/redux/features/location/locationApiSlice";
import { Button } from "../ui/button";

import { useGetPackageQuery } from "@/redux/features/package/packageApiSlice";
import { useAddPriceMutation } from "@/redux/features/price/priceApiSlice";

const PriceAddForm = () => {
  // get guest
  const { data: guest } = useGetGuestQuery("") as any;
  const guests = guest?.data;
  //   data for end point
  const { data } = useGetEndLocationQuery("") as any;
  const end_locations = data?.data;

  //   data for start point
  const { data: result } = useGetStartLocationQuery("") as any;
  const start_locations = result?.data;
  //   package data
  const { data: packageResult } = useGetPackageQuery("") as any;
  const packages = packageResult?.data;

  //   form submission
  const [addPrice, options] = useAddPriceMutation();
  //   hook form function
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //   form submission
  const onSubmit = async (data: any) => {
    await addPrice({
      price: data.price,
      start_point_id: data.start_point,
      end_point_id: data.end_point,
      package_id: data.package_id,
      guest_id: data.guest,
    });
    reset();
  };
  return (
    <div>
      {" "}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          {/* select package */}
          <div className="col-12 mb-4">
            <LabelField>Select Package</LabelField>
            <select
              defaultValue={""}
              {...register("package_id", { required: true })}
              className="w-full appearance-none rounded-sm border py-2 px-3 leading-tight text-gray-700 shadow-none focus:ring-0">
              <option value="" disabled>
                Select
              </option>
              {packages?.map((item: any, i: number) => (
                <option value={item?.id} key={item?.id}>
                  {item?.name}
                </option>
              ))}
              {/* <option value="male">male</option>
              <option value="other">other</option> */}
            </select>
            <InputFieldError
              type={errors.package_id?.type as string}
              message_1="Package  is required!"
            />
          </div>

          <div className="col-12 mb-4">
            <LabelField>Select Start point</LabelField>
            <select
              defaultValue={""}
              {...register("start_point", { required: true })}
              className="w-full appearance-none rounded-sm border py-2 px-3 leading-tight text-gray-700 shadow-none focus:ring-0">
              <option value="" disabled>
                Select
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
              message_1="Start Point is required!"
            />
          </div>
          <div className="col-12 mb-4">
            <LabelField>Select End point</LabelField>
            <select
              defaultValue={""}
              {...register("end_point", { required: true })}
              className="w-full appearance-none rounded-sm border py-2 px-3 leading-tight text-gray-700 shadow-none focus:ring-0">
              <option value="" disabled>
                Select
              </option>
              {end_locations?.map((item: any, i: number) => (
                <option value={item?.id} key={item?.id}>
                  {item?.name}
                </option>
              ))}
            </select>
            <InputFieldError
              type={errors.end_point?.type as string}
              message_1=" End Point  is required!"
            />
          </div>
          <div className="col-12 mb-4">
            <LabelField>Select Guest</LabelField>
            <select
              defaultValue={""}
              {...register("guest", { required: true })}
              className="w-full appearance-none rounded-sm border py-2 px-3 leading-tight text-gray-700 shadow-none focus:ring-0">
              <option value="" disabled>
                Select
              </option>
              {guests?.map((item: any, i: number) => (
                <option value={item?.id} key={item?.id}>
                  {item?.name}
                </option>
              ))}
              {/* <option value="male">male</option>
              <option value="other">other</option> */}
            </select>
            <InputFieldError
              type={errors.guest?.type as string}
              message_1="Guest is required!"
            />
          </div>
          <div className="col-12 mb-4">
            {/* Package Name */}
            <LabelField>Enter Price</LabelField>
            <input
              className="w-full appearance-none rounded-sm border py-2 px-3 leading-tight text-gray-700 shadow-none focus:ring-0"
              {...register("price", { required: true })}
              placeholder="Price"

              //   value={location}
              //   onChange={(e: any) => setLocation(e.target.value)}
            />

            <InputFieldError
              type={errors.price?.type as string}
              message_1="price is required!"
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

export default PriceAddForm;
