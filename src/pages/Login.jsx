import React from "react";
import LoginForm from "../features/login/LoginForm";

const Login = () => {
  return (
    <div className="flex items-center">
      <div className="lg:w-[30%] w-full h-screen flex items-center justify-center">
        <div className="p-2 shadow-md rounded-md border w-[90%]">
          <h1 className="text-2xl font-bold text-center text-gray-800">
            چت اپو
          </h1>
          <LoginForm />
        </div>
      </div>
      <div className="flex-1 h-screen bg-indigo-500 lg:flex hidden items-center justify-center">
        به چت اپو خوش آمدی
      </div>
    </div>
  );
};

export default Login;
