"use client";
const InputField = ({ ...rest }) => {
  return (
    <div>
      <input
        className={`w-full appearance-none rounded-2xl border py-2 px-3 leading-tight text-gray-700 shadow-md focus:ring-0 focus:outline focus:outline-cyan-500 ${rest?.error ? 'border-red-500' : ''}`}
        {...rest}
      />
      {rest?.error ? <div className="text-red-500 ml-2">{rest?.error}</div> : null}
    </div>
  );
};

export default InputField;
