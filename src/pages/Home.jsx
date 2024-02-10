import React from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Messages from "../features/home/Messages";
import Sidebar from "../features/home/Sidebar";
import { logout } from "../services/authService";

const Home = () => {
  

  return (
    <section className="flex mx-auto w-full h-screen">
      <Sidebar />
      <Messages />
    </section>
  );
};

export default Home;
