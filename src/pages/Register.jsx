import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../features/register/RegisterForm";
import { useAuthtorize } from "../hooks/useAuthrozie";

const Register = () => {
  const { isAuthenticated, isLoading, user } = useAuthtorize();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) return navigate(`/`);
  }, [isAuthenticated, user, isLoading, navigate]);
  return (
    <div className="flex items-center">
      <div className="lg:w-[30%] w-full h-screen flex items-center justify-center">
        <div className="p-2 shadow-md rounded-md border w-[90%]">
          <h1 className="text-2xl font-bold text-center text-gray-800">
            چت اپو
          </h1>
          <RegisterForm />
        </div>
      </div>
      <div className="flex-1 h-screen bg-blue-500 lg:flex hidden items-center justify-center">
        به چت اپو خوش آمدی
      </div>
    </div>
  );
};

export default Register;
