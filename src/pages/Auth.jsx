import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../features/login/LoginForm";
import RegisterForm from "../features/register/RegisterForm";
import { useGetUser } from "../hooks/useUser";
import ThemeSwitch from "../ui/ThemeSwitch";
import { FcSafe } from "react-icons/fc";

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
        <div className="flex-1 h-screen flex-col rounded-r-3xl bg-blue-500 dark:bg-indigo-900 lg:flex hidden items-center justify-center">
          <h2 className="text-3xl font-bold text-center">
            ،
            سلام
            <br />
            به چت اپو خوش اومدی
          </h2>
          <FcSafe className="w-72 h-72" />
        </div>
        <div className="lg:w-[30%] w-full h-screen flex items-center justify-center flex-col border-none">
          <div className="px-3 py-4 shadow-md bg-white dark:bg-slate-950 rounded-2xl border dark:border-none w-[90%]">
            <h1 className="text-3xl font-bold text-center">
              {active ? "ثبت نام" : "ورود"}
            </h1>
            {active ? (
              <RegisterForm setActive={setActive} />
            ) : (
              <LoginForm setActive={setActive} />
            )}

            <hr className="border-slate-300 dark:border-slate-700 my-3" />
            <p className="mt-2 font-medium text-center">
              ورود شما به منزله پذیرش قوانین چت اپو میباشد
            </p>
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
