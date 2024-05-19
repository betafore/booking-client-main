import React from "react";
import LabelField from "../LabelField";
import InputField from "../InputField";
import InputFieldError from "../InputFieldError";
import { Button } from "../ui/button";

const SubPackageAddForm = ({
  subPackages,
  setSubPackages,
  register,
  errors,
  handleSubPackage,
}: {
  subPackages: any;
  setSubPackages: any;
  register: any;
  errors: any;
  handleSubPackage: any;
}) => {
  return (
    <>
      {subPackages.length > 0 &&
        subPackages.map((item: any, i: number) => (
          <div className="col-12 mb-4" key={item.value}>
            {/* Package Name */}
            <LabelField>Sub Package {i + 1}</LabelField>
            <InputField
              {...register("name", { required: true })}
              placeholder="Name"
              name="name"
              onChange={(e: any) => {
                const data = subPackages.map((i: any) => {
                  return {
                    ...i,
                    name: i.value === item.value ? e.target.value : i.name,
                  };
                });
                setSubPackages(data);
              }}
            />
            <InputFieldError
              type={errors.name?.type as string}
              message_1="name is required!"
            />
          </div>
        ))}
      <div className="col-12 mb-4">
        <Button
          type="button"
          onClick={handleSubPackage}
          className="w-full"
          variant="outline">
          <span>+</span> Add Sub Package
        </Button>
      </div>
    </>
  );
};

export default SubPackageAddForm;
