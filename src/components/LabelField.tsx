import React from "react";

const LabelField = ({
  children,
  ...res
}: React.LabelHTMLAttributes<HTMLLabelElement> & {
  children: React.ReactNode;
}) => {
  return (
    <label {...res} className="mb-2 block font-bold text-gray-700">
      {children}
    </label>
  );
};

export default LabelField;
