import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthtorize } from "../hooks/useAuthrozie";
import { useGetUser } from "../hooks/useUser";
import Loading from "./Loading";

const ProtectedRoutes = ({ children }) => {
  const { user, isLoading } = useGetUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) return navigate(`/login`);
  }, [user, isLoading, navigate]);

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen bg-gray-400">
        <Loading />
      </div>
    );

  if (user) return children;
};

export default ProtectedRoutes;
