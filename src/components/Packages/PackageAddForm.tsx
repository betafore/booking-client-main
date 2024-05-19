"use client";
import React, { ChangeEvent, useState } from "react";
import LabelField from "../LabelField";
import InputField from "../InputField";
import InputFieldError from "../InputFieldError";
import { useForm } from "react-hook-form";
import { MultiSelect } from "react-multi-select-component";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { Button } from "../ui/button";
import { useAddPackageMutation } from "@/redux/features/package/packageApiSlice";
import { IPackage, ISubPackage } from "@/type";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calligraffitti } from "next/font/google";
import SubPackageAddForm from "./SubPackageAddForm";

const animatedComponents = makeAnimated();

const days = [
  { label: "Friday", value: "friday" },
  { label: "Saturday 🥭", value: "saturday" },
  { label: "Sunday", value: "sunday" },
  { label: "Monday", value: "monday" },
  { label: "Tuesday", value: "tuesday" },
  { label: "Wednesday", value: "wednesday" },
  { label: "Thursday", value: "thursday" },
];
const PackageAddForm = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [active, setActive] = useState(false);
  const [packages, setPackages] = useState<Partial<IPackage>>({
    name: "",
    description: "",
    price: 0,
    limit: 0,
    start_date: "",
    end_date: "",
  });
  const [subPackages, setSubPackages] = useState<any>([]);

  const [addPackage, options] = useAddPackageMutation();
  const { isError, isLoading } = options;
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPackages({ ...packages, [name]: value });
  };
  const handleSubPackage = () => {
    setSubPackages([
      ...subPackages,
      { value: Date.now().toString(), name: "" },
    ]);
  };

  const {
    register,
    reset,
    formState: { errors },
  } = useForm();
  const data: any = {
    ...packages,
    active_days: selected,
    child_packages: subPackages.map((item: any) => {
      return {
        name: item.name,
      };
    }),
    active: active,
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await addPackage(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="col-12 mb-4">
        {/* Package Name */}
        <LabelField>Package Name</LabelField>
        <InputField
          {...register("name", { required: true })}
          placeholder="Name"
          name="name"
          onChange={handleChange}
        />
        <InputFieldError
          type={errors.name?.type as string}
          message_1="name is required!"
        />
      </div>
      <div className="col-12 mb-4">
        {/* Package Description */}
        <LabelField>Description</LabelField>
        <InputField
          {...register("description", { required: true })}
          placeholder="Write Description..."
          onChange={handleChange}
          name="description"
        />
        <InputFieldError
          type={errors.description?.type as string}
          message_1="description is required!"
        />
      </div>
      <div className="col-12 mb-4">
        {/* Package Price */}
        <LabelField>Price</LabelField>
        <InputField
          {...register("price", { required: true })}
          placeholder="Price"
          name="price"
          type="number"
          onChange={handleChange}
        />
        <InputFieldError
          type={errors.price?.type as string}
          message_1="price is required!"
        />
      </div>
      <div className="col-12 mb-4">
        <LabelField>Select Active Days</LabelField>
        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          options={days}
          onChange={(value) =>
            setSelected(value.map((item: any) => item.value as string))
          }
          required
        />
        {/* <InputFieldError
          type={selected.length > 0 ? "" : "required"}
          message_1="End Date is required!"
        /> */}
      </div>
      <div className="col-12 mb-4">
        {/* Passenger limit */}
        <LabelField>Limit</LabelField>
        <InputField
          {...register("limit", { required: true })}
          placeholder="Limit"
          name="limit"
          type="number"
          onChange={handleChange}
        />
        <InputFieldError
          type={errors.limit?.type as string}
          message_1="limit is required!"
        />
      </div>
      <div className="col-12 mb-4">
        {/* Start Date */}
        <LabelField>Start Date</LabelField>
        <InputField
          type="date"
          {...register("start_date", { required: true, valueAsDate: true })}
          placeholder="Start Date"
          name="start_date"
          onChange={handleChange}
        />
        <InputFieldError
          type={errors.limit?.type as string}
          message_1="Start Date is required!"
        />
      </div>{" "}
      <div className="col-12 mb-4">
        {/* End Date */}
        <LabelField>End Date</LabelField>
        <InputField
          type="date"
          {...register("start_date", { required: true, valueAsDate: true })}
          placeholder="End Date"
          name="end_date"
          onChange={handleChange}
        />
        <InputFieldError
          type={errors.limit?.type as string}
          message_1="End Date is required!"
        />
      </div>
      <div className="col-12 mb-4 flex  items-center w-full">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              type="button"
              onClick={handleSubPackage}
              className="w-full"
              variant="outline"
            >
              <span>+</span> Add Sub Package
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] max-h-fit overflow-y-auto rounded-lg">
            <DialogHeader>
              <DialogTitle className="text-2xl border-b pb-2 mb-4">
                Add Sub Package
              </DialogTitle>
              <SubPackageAddForm
                subPackages={subPackages}
                setSubPackages={setSubPackages}
                register={register}
                errors={errors}
                handleSubPackage={handleSubPackage}
              />
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div className="col-12 mb-4 flex  items-center">
        {/* End Date */}
        <LabelField htmlFor="active">Active </LabelField>
        <input
          className="ml-2 cursor-pointer"
          checked={active}
          {...register("checkbox")}
          type="checkbox"
          onChange={() => setActive(!active)}
          id="active"
        />
        <InputFieldError
          type={errors.limit?.type as string}
          message_1="End Date is required!"
        />
      </div>
      <Button>Submit</Button>
    </form>
  );
};

export default PackageAddForm;
