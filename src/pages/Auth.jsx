import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../features/login/LoginForm";
import RegisterForm from "../features/register/RegisterForm";
import { useGetUser } from "../hooks/useUser";
import ThemeSwitch from "../ui/ThemeSwitch";

const Auth = () => {
  const { user, isLoading } = useGetUser();
  const navigate = useNavigate();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (user) return navigate("/");
  }, [user, isLoading, navigate]);

  return (
    <>
      <div className="flex items-center">
        <div className="flex-1 h-screen bg-blue-500 dark:bg-indigo-900 lg:flex hidden items-center justify-center">
          به چت اپو خوش آمدی
        </div>
        <div className="lg:w-[30%] w-full h-screen flex items-center justify-center flex-col border-none">
          <div className="w-[90%] flex items-center justify-between  bg-white dark:bg-[#252525]">
            <button
              onClick={() => setActive(true)}
              className={`w-1/2 text-center font-medium rounded-tl-md py-1.5 ${
                !active ? "bg-slate-300 dark:bg-slate-900" : "bg-transparent"
              }`}
            >
              ثبت نام
            </button>
            <button
              onClick={() => setActive(false)}
              className={`w-1/2 text-center font-medium rounded-tr-md py-1.5 ${
                active ? "bg-slate-300 dark:bg-slate-900" : "bg-transparent"
              }`}
            >
              ورود
            </button>
          </div>
          <div className="p-2 shadow-md rounded-b-md border dark:border-none w-[90%]">
            <h1 className="text-2xl font-bold text-center">
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
      <div className="absolute left-2 bottom-2">
        <ThemeSwitch />
      </div>
    </>
  );
};

export default Auth;
