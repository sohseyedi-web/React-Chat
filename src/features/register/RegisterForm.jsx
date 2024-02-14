import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSingUpUser } from "../../hooks/useUser";
import RadioInputGroup from "../../ui/RadioInputGroup";
import TextField from "./../../ui/TextField";

const RegisterForm = ({setActive}) => {
  const { isCreating, createUser } = useSingUpUser();

  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const onSubmitForm = async (data) => {
    await createUser(data);
    navigate("/");
  };

  return (
    <div className="w-full pt-3">
      <form className="space-y-5" onSubmit={handleSubmit(onSubmitForm)}>
        <TextField
          register={register}
          errors={errors}
          name="fullName"
          placeHolder="نام و نام خانوادگی"
          validationSchema={{
            required: "نام کامل ضرروی است",
          }}
        />
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
        <TextField
          register={register}
          errors={errors}
          name="confirmPassword"
          placeHolder="تکرار رمز عبور"
          validationSchema={{
            required: "رمز عبور ضرروی است",
            minLength: {
              value: 6,
              message: " رمز عبور کوتاه است",
            },
          }}
        />
        <RadioInputGroup
          register={register}
          data={{
            name: "gender",
            validationSchema: {
              required: "جنسیت ضرروی است",
            },
            options: [
              { label: "آقا", value: "male" },
              { label: "خانم", value: "female" },
            ],
          }}
          watch={watch}
          errors={errors}
        />
        <button className="mt-2 btn dark:border-none bg-blue-600 btn-active w-full text-lg rounded-2xl h-[45px] text-white">
          {isCreating ? "لطفا صبر کنید" : "ثبت نام "}
        </button>
      </form>
      <hr className="border-slate-300 dark:border-slate-700 my-3" />
      <div className="space-y-3">
        <div className="flex items-center justify-center gap-x-1">
          <span className="font-bold cursor-pointer" onClick={() => setActive(false)}>
            ثبت نام
          </span>
          <span >حساب کاربری ندارید؟</span>
        </div>
        <div className="flex items-center justify-center gap-x-1">
          <span className="font-bold cursor-pointer">ایجاد رمز جدید</span>
          <span>رمز عبورتان را گم کرده‌اید؟</span>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
