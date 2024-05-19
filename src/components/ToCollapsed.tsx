"use client";
import React, { useEffect, useState } from "react";
import { useCollapse } from "react-collapsed";
import InputField from "./InputField";
import LabelField from "./LabelField";
import { FaChevronDown } from "react-icons/fa6";
import { MdClear, MdKeyboardArrowDown } from "react-icons/md";
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
    <div className="">
      {locations?.map((item: any) => (
        <div key={item.id}>
          <div
            className="bg-gray-200 px-4 border-b border-gray-300"
            {...getToggleProps()}
          >
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
                      setLocationId({ ...locationId, end_point_id: item?.id })
                    }
                  >
                    {items?.name}
                  </p>
                ))}
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
const ToCollapsible = ({
  label,
  locations,
  start,
  end,
  setEnd,
  setLocationId,
  locationId,
  formErrors,
  setFormErrors,
}: {
  label: string;
  locations: any;
  start: string;
  end: string;
  setEnd: any;
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
    setFormErrors?.({ ...formErrors, end: "" });
  }, [end]);

  return (
    <div className="text-left">
      <div className="px-2">
        <LabelField>{label}</LabelField>
      </div>
      <div className="relative">
        <div {...getToggleProps()}>
          <InputField
            type="text"
            value={end}
            error={!!formErrors?.end ? formErrors?.end : null}
          />
        </div>
        <button
          className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2  right-0 text-lg"
          onClick={() => (setExpanded(false) as any) & (setEnd("") as any)}
        >
          <MdKeyboardArrowDown />
        </button>
      </div>
      {start && isExpanded && (
        <div {...getCollapseProps()}>
          <div className="content">
            <InnerCollapsible
              setValue={setEnd}
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

export default ToCollapsible;
