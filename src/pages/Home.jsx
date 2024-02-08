import React from "react";
import { toast } from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
import { logout } from "../services/authService";

const Home = () => {
  const navigate = useNavigate();
  const logoutHandler = async () => {
    await logout();
    toast.success("خارج شدی");
    navigate("/login");
  };

  return <button onClick={logoutHandler}>خرو ج</button>;
};

export default Home;
