import { useState } from "react";
import { toast } from "react-hot-toast";
import * as RiIcon from "react-icons/ri";
import { useGetAllUsers } from "../../../hooks/useUser";
import useHandleUsers from "../../../zustand/useHandleUsers";

const InputSearch = () => {
  const [search, setSearch] = useState("");
  const { setSelectedUser } = useHandleUsers();
  const { data } = useGetAllUsers();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("بیش از سه کلمه لازم است");
    }
  };

  return (
    <form className="w-full relative" onSubmit={handleSubmit}>
      <RiIcon.RiSearchLine
        className="absolute top-2 left-1 text-gray-400"
        size={26}
      />
      <input
        type={"text"}
        placeholder="Search User"
        dir="ltr"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="input input-bordered h-[45px] w-full focus:bg-white bg-gray-100 dark:bg-slate-900 pl-8 transition-all duration-300 outline-none"
      />
    </form>
  );
};

export default InputSearch;