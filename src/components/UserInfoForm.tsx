"use client";
import React, { useState } from "react";
import LabelField from "./LabelField";
import InputField from "./InputField";

const UserInfoForm = ({
  userInfo,
  setUserInfo,
  formErrors,
  setFormErrors
}: {
  userInfo: any;
  setUserInfo: any;
  formErrors: any;
  setFormErrors: (value: any) => void;
}) => {
  const [isAccount, setIsAccount] = useState(false);
  const handleInputValueChange = (key: string, value: any) => {
    setUserInfo({ ...userInfo, [key]: value })
    setFormErrors({ ...formErrors, [key]: ''})
  }

  return (
    <div className="mb-10">
      <h3 className="text-left text-2xl text-gray-700 border-b-2 px-2 py-3">
        Your Information
      </h3>

      <form className="mt-3">
        <div className="row">
          <div className="col-12 md:col-6 mb-4">
            <LabelField>Name</LabelField>
            <InputField
              type="text"
              placeholder="Enter your name"
              required
              onChange={(e: any) =>
                handleInputValueChange('name', e.target.value)
              }
              error={!!formErrors?.name ? formErrors?.name : null}
            />
          </div>
          <div className="col-12 md:col-6 mb-4">
            <LabelField>Email</LabelField>
            <InputField
              type="email"
              placeholder="Enter your email"
              required
              onChange={(e: any) =>
                handleInputValueChange('email', e.target.value)
              }
              error={!!formErrors?.email ? formErrors?.email : null}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 md:col-6 mb-4">
            <LabelField>Phone</LabelField>
            <InputField
              type="text"
              placeholder="Enter your Phone"
              required
              onChange={(e: any) =>
                handleInputValueChange('phone', e.target.value)
              }
              error={!!formErrors?.phone ? formErrors?.phone : null}
            />
          </div>
          <div className="col-12 md:col-6 mb-4">
            <LabelField>
              Address{" "}
              <span className="font-normal text-gray-500">(optional)</span>
            </LabelField>
            <InputField
              type="text"
              placeholder="Address"
              onChange={(e: any) =>
                handleInputValueChange('address', e.target.value)
              }
            />
          </div>
        </div>

        <div className="flex items-center mt-4  space-x-2">
          <input
            type="checkbox"
            id="create-account"
            onChange={() => setIsAccount(!isAccount)}
          />
          <label
            htmlFor="create-account"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Create account?
          </label>
        </div>
        
        {isAccount && (
          <div className="row mt-4">
            <div className="col-12 md:col-6 mb-4">
              <LabelField>Password</LabelField>
              <InputField
                type="password"
                placeholder="Password"
                required
                onChange={(e: any) =>
                handleInputValueChange('password', e.target.value)
                }
              />
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default UserInfoForm;
