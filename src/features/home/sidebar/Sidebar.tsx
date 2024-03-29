import React from "react";
import { toast } from "react-hot-toast";
import * as RiIcon from "react-icons/ri";
import InputSearch from "./InputSearch";
import UserLists from "./UserLists";
import useHandleUsers from "../../../zustand/useHandleUsers";
import { useEffect } from "react";
import ThemeSwitch from "../../../ui/ThemeSwitch";
import { useLogOut } from "../../../hooks/useUser";
import Back from "../../../ui/Back";

const Sidebar = () => {
  const { isActive, setIsActive } = useHandleUsers();
  const { logOut } = useLogOut();

  useEffect(() => {
    window.addEventListener("resize", () =>
      setIsActive(window.innerWidth > 1024)
    );
    return () =>
      window.removeEventListener("resize", () =>
        setIsActive(window.innerWidth > 1024)
      );
  }, [isActive]);

  const logoutHandler = async () => {
    await logOut();
    toast.success("خارج شدی");
  };
  return (
    <>
      <Back />
      <aside
        className={`${
          isActive ? "w-[280px] left-0 top-0" : "-left-24 w-0 top-0"
        } fixed z-50 lg:relative lg:bg-gray-200 bg-gray-300 dark:bg-slate-900 h-screen lg:h-auto border-slate-300 dark:border-slate-700 border-r p-2 space-y-3 transition-all duration-300`}
      >
        <InputSearch />
        <hr className="border-slate-900 my-3 dark:border-slate-700" />
        <UserLists />
        <div className="absolute bottom-0 w-full left-0 p-2 flex items-center justify-between">
          <button
            onClick={logoutHandler}
            className="flex items-center gap-x-2 hover:bg-red-500 hover:text-white rounded-md px-2 py-1.5 transition-all duration-300"
          >
            <RiIcon.RiShutDownLine size={26} />
          </button>
          <ThemeSwitch />
        </div>
        <div
          onClick={() => setIsActive(!isActive)}
          className="absolute top-1/2 -right-3 bg-slate-400 rounded-full text-white cursor-pointer"
        >
          <RiIcon.RiArrowLeftDoubleLine size={26} />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
