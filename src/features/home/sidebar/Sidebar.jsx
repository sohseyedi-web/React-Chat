import { toast } from "react-hot-toast";
import * as RiIcon from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../services/authService";
import InputSearch from "./InputSearch";
import UserLists from "./UserLists";

const Sidebar = () => {
  const navigate = useNavigate();

  const logoutHandler = async () => {
    await logout();
    navigate("/login");
    toast.success("خارج شدی");
  };
  return (
    <div className="w-[260px] bg-slate-200 border-r flex flex-col px-1 py-3 relative">
      <InputSearch />
      <hr className="border-slate-900 my-3 " />
      <UserLists />
      <div className="absolute bottom-0 w-full left-0 p-2">
        <button
          onClick={logoutHandler}
          className="flex items-center gap-x-2 hover:bg-red-500 hover:text-white rounded-md px-2 py-1.5 transition-all duration-300"
        >
          <RiIcon.RiShutDownLine size={26} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
