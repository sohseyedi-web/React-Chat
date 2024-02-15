import React from "react";

const TextField = ({
  name,
  placeHolder,
  register,
  errors,
  validationSchema,
  type = "text",
}) => {
  return (
    <div className="my-2 space-y-4">
      <input
        type={type}
        className="input input-bordered w-full text-lg focus:bg-white bg-gray-100 dark:bg-slate-900 dark:focus:bg-slate-700 text-center transition-all duration-300 outline-none h-[45px] rounded-2xl"
        placeholder={placeHolder}
        name={name}
        id={name}
        {...register(name, validationSchema)}
      />
      {errors && errors[name] && (
        <div className="text-red-500 my-1 text-right w-full pt-1">
          {errors[name]?.message}
        </div>
      )}
    </div>
  );
};

export default TextField;
