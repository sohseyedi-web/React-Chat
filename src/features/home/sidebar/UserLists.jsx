import React from "react";
import { useGetAllUsers } from "../../../hooks/useUser";
import Loading from './../../../ui/Loading';

const UserLists = () => {
  const { data, isLoading } = useGetAllUsers();
  const { user } = useGetUser();

  if (isLoading) return <Loading />;
  if (!data?.length) return <div>کاربری یافت نشد</div>;

  return (
    <div className="space-y-3 overflow-y-auto h-[800px]">
      <div className="w-full hover:bg-green-600 text-white px-2 bg-green-500 rounded-md hover:text-white transition-all duration-200 py-2 flex items-center gap-x-2 cursor-pointer">
        <img
          src={user?.profilePic}
          alt={user?.fullName}
          className="w-10 h-10"
        />
        <h6 className="text-xl font-semibold">{user?.username && "You"}</h6>
      </div>
      {data?.map((user, index) => (
        <User
          user={user}
          key={user?._id}
          lastIndex={index === data?.length - 1}
        />
      ))}
    </div>
  );
};

export default UserLists;

export const User = ({ user, index }) => {
  return (
    <div
      key={user?._id}
      className="w-full hover:bg-indigo-500 px-2 rounded-md hover:text-white transition-all duration-200 py-2 flex items-center gap-x-2 cursor-pointer"
    >
      <img src={user?.profilePic} alt={user?.name} className="w-10 h-10" />
      <h6 className="text-xl font-semibold">{user?.username}</h6>
    </div>
  );
};
