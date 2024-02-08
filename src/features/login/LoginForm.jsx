import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useLoginUser } from "../../hooks/useUser";
import TextField from "../../ui/TextField";

const LoginForm = () => {
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
    <div className="w-full py-2">
      <form className="space-y-2" onSubmit={handleSubmit(onSubmitForm)}>
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

        <button className="mt-2 btn bg-indigo-600 btn-active w-full text-lg h-[45px] text-white">
          {isLoading ? "لطفا صبر کنید" : "ورود"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
