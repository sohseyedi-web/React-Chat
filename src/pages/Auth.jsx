import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../features/login/LoginForm";
import RegisterForm from "../features/register/RegisterForm";
import { useGetUser } from "../hooks/useUser";

const Auth = () => {
  const { user, isLoading } = useGetUser();
  const navigate = useNavigate();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (user) return navigate("/");
  }, [user, isLoading, navigate]);

  return (
    <div className="flex items-center">
      <div className="flex-1 h-screen bg-blue-500 lg:flex hidden items-center justify-center">
        به چت اپو خوش آمدی
      </div>
      <div className="lg:w-[30%] w-full h-screen flex items-center justify-center flex-col">
        <div className="w-[90%] flex items-center justify-between  bg-white">
          <button
            onClick={() => setActive(true)}
            className={`w-1/2 text-center font-medium rounded-tl-md py-1.5 ${
              !active ? "bg-slate-300" : "bg-transparent"
            }`}
          >
            ثبت نام
          </button>
          <button
            onClick={() => setActive(false)}
            className={`w-1/2 text-center font-medium rounded-tr-md py-1.5 ${
              active ? "bg-slate-300" : "bg-slate-50 "
            }`}
          >
            ورود
          </button>
        </div>
        <div className="p-2 shadow-md rounded-b-md border w-[90%]">
          <h1 className="text-2xl font-bold text-center text-gray-800">
            چت اپو
          </h1>
          {active ? <RegisterForm /> : <LoginForm />}
          {active ? (
            <p className="mt-2 font-semibold text-center">
              ثبت نام در سایت به منزله پذیرش قوانین چت اپو میباشد
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Auth;


