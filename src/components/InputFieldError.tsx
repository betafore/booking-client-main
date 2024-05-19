import React from "react";

const InputFieldError = ({
  type,
  message_1,
  message_2,
  message_3,
}: {
  type: string;
  message_1?: string;
  message_2?: string;
  message_3?: string;
}) => {
  return (
    <>
      {type === "required" ? (
        <span className="text-red-700">{message_1}</span>
      ) : type === "maxLength" ? (
        <span className="text-red-700">{message_2}</span>
      ) : (
        type === "minLength" && (
          <span className="text-red-700">{message_3} </span>
        )
      )}
    </>
  );
};

export default InputFieldError;
