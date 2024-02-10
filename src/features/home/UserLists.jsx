import React from "react";
import { getAllUsers } from "../../services/authService";

const UserLists = () => {

  const users = [];

  return (
    <div className="space-y-3">
      {users?.map((user, index) => (
        <User
          user={user}
          key={user?._id}
          lastIndex={index === users?.length - 1}
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
