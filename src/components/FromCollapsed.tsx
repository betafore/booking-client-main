"use client";
import React, { useEffect, useState } from "react";
import { useCollapse } from "react-collapsed";
import InputField from "./InputField";
import LabelField from "./LabelField";
import { FaChevronDown } from "react-icons/fa6";
import { MdClear, MdKeyboardArrowDown } from "react-icons/md";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

function InnerCollapsible({
  setValue,
  setIsExpanded,
  locations,
  setLocationId,
  locationId,
}: any) {
  const { getCollapseProps, getToggleProps, isExpanded, setExpanded } =
    useCollapse();

  return (
    <div className="divide-y-[1px]">
      {locations?.map((item: any) => (
        <div key={item.id}>
          <div className="px-3 py-0.5 bg-gray-100" {...getToggleProps()}>
            <span className="w-full font-medium flex items-center justify-between">
              {item?.name}
              <FaChevronDown
                className={`duration-500 text-xs ${
                  isExpanded ? "rotate-180 " : ""
                }`}
              />
            </span>
          </div>
          {isExpanded && (
            <div {...getCollapseProps()}>
              <div className="content px-4 duration-500 transition-all">
                {item?.child_locations?.map((items: any) => (
                  <p
                    key={items?.id}
                    className="cursor-pointer"
                    onClick={() =>
                      setValue(item?.name + "-" + items?.name) &
                      setIsExpanded(false) &
                      setLocationId({ ...locationId, start_point_id: item?.id })
                    }
                  >
                    {items?.name}
                  </p>
                ))}
                {/* <div className="flex flex-col md:items-center my-2 gap-1 md:gap-2 md:flex-row">
                  <Input type="text" className="h-6" placeholder="Others" />
                  <Button className="bg-cyan-400 text-white h-6 w-fit">
                    Submit
                  </Button>
                </div> */}

                {/* <p
                  className="cursor-pointer"
                  onClick={() => setValue("click") & setIsExpanded(false)}>
                  Click <i>Collapse</i> to hide this content...
                </p> */}
              </div>
            </div>
          )}
        </div>
      ))}

      {/* <div className="bg-gray-200 px-4" {...getToggleProps()}>
        parent
      </div>
      {isExpanded && (
        <div {...getCollapseProps()}>
          <div className="content px-4">
            <p
              className="cursor-pointer"
              onClick={() => setValue("now") & setIsExpanded(false)}>
              Now you can see the hidden content.
            </p>
            <p
              className="cursor-pointer"
              onClick={() => setValue("click") & setIsExpanded(false)}>
              Click <i>Collapse</i> to hide this content...
            </p>
          </div>
        </div>
      )} */}
    </div>
  );
}
const FromCollapsible = ({
  label,
  locations,
  setStart,
  start,
  setLocationId,
  locationId,
  formErrors,
  setFormErrors,
}: {
  label: string;
  locations: any;
  setStart: any;
  start: string;
  setLocationId: any;
  locationId: {
    start_point_id: string;
    end_point_id: string;
  };
  formErrors: any;
  setFormErrors: (value: any) => any;
}) => {
  const { getCollapseProps, getToggleProps, isExpanded, setExpanded } =
    useCollapse();

  useEffect(() => {
    setFormErrors?.({ ...formErrors, start: "" });
  }, [start]);
  return (
    <div className="text-left">
      <div className="px-2">
        <LabelField>{label}</LabelField>
      </div>
      <div className="relative">
        <div {...getToggleProps()}>
          <InputField
            type="text"
            value={start}
            error={!!formErrors?.start ? formErrors?.start : null}
          />
        </div>
        <button
          className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2  right-0 text-lg"
          onClick={() => (setExpanded(false) as any) & (setStart("") as any)}
        >
          <MdKeyboardArrowDown />
        </button>
      </div>
      {isExpanded && (
        <div {...getCollapseProps()}>
          <div className="content">
            <InnerCollapsible
              setValue={setStart}
              setIsExpanded={setExpanded}
              locations={locations}
              setLocationId={setLocationId}
              locationId={locationId}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FromCollapsible;
