import React from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useGetUser } from "../hooks/useUser";
import { logout } from "../services/authService";

const Home = () => {
  const navigate = useNavigate();
  const logoutHandler = async () => {
    await logout();
    toast.success("خارج شدی");
    navigate("/login");
  };

  const { user } = useGetUser();


  return <button onClick={logoutHandler}>خرو ج</button>;
};

export default Home;
