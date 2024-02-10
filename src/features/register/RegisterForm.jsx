import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSingUpUser } from "../../hooks/useUser";
import RadioInputGroup from "../../ui/RadioInputGroup";
import TextField from "./../../ui/TextField";

const RegisterForm = () => {
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
    <div className="w-full py-2">
      <form className="space-y-2" onSubmit={handleSubmit(onSubmitForm)}>
        <TextField
          register={register}
          errors={errors}
          name="fullName"
          required
          placeHolder="نام و نام خانوادگی"
          validationSchema={{
            required: "نام کامل ضرروی است",
          }}
          label={"نام شما "}
        />
        <TextField
          register={register}
          errors={errors}
          name="username"
          required
          placeHolder="نام کاربری"
          validationSchema={{
            required: "نام کاربری ضرروی است",
          }}
          label={"نام کاربری "}
        />
        <TextField
          register={register}
          errors={errors}
          name="password"
          required
          placeHolder="رمز عبور"
          validationSchema={{
            required: "رمز عبور ضرروی است",
            minLength: {
              value: 6,
              message: " رمز عبور کوتاه است",
            },
          }}
          label={"رمز عبور"}
        />
        <TextField
          register={register}
          errors={errors}
          name="confirmPassword"
          required
          placeHolder="تکرار رمز عبور"
          validationSchema={{
            required: "رمز عبور ضرروی است",
            minLength: {
              value: 6,
              message: " رمز عبور کوتاه است",
            },
          }}
          label={"تکرار رمز عبور"}
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
        <button className="mt-2 btn bg-blue-600 btn-active w-full text-lg h-[45px] text-white">
          {isCreating ? "لطفا صبر کنید" : "ثبت نام "}
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
