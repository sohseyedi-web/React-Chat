import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useLoginUser } from "../../hooks/useUser";
import TextField from "../../ui/TextField";

const LoginForm = ({setActive}) => {
  const { isLoading, loginUser } = useLoginUser();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmitForm = async (data) => {
    await loginUser(data);
    navigate("/");
  };
  return (
    <div className="w-full pt-3">
      <form className="space-y-5" onSubmit={handleSubmit(onSubmitForm)}>
        <TextField
          register={register}
          errors={errors}
          name="username"
          placeHolder="نام کاربری"
          validationSchema={{
            required: "نام کاربری ضرروی است",
          }}
        />
        <TextField
          register={register}
          errors={errors}
          name="password"
          placeHolder="رمز عبور"
          validationSchema={{
            required: "رمز عبور ضرروی است",
            minLength: {
              value: 6,
              message: " رمز عبور کوتاه است",
            },
          }}
        />

        <button className="mt-2 btn bg-indigo-600 border-none btn-active rounded-2xl w-full text-lg h-[45px] text-white">
          {isLoading ? "لطفا صبر کنید" : "ورود"}
        </button>
      </form>
      <hr className="border-slate-300 dark:border-slate-700 my-3" />
      <div className="space-y-3">
        <div className="flex items-center justify-center gap-x-1">
          <span className="font-bold cursor-pointer" onClick={() => setActive(true)}>
            میخواهم وارد شوم
          </span>
          <span className="cursor-pointer">نام کاربری دارم</span>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
