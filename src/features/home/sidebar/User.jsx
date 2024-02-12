import useHandleUsers from "../../../zustand/useHandleUsers";

const User = ({ user }) => {
  const { selectedUser, setSelectedUser } = useHandleUsers();
  const isSelect = selectedUser?._id === user?._id;

  return (
    <div
      onClick={() => setSelectedUser(user)}
      key={user?._id}
      className={`${
        isSelect ? "bg-slate-800 text-white" : "bg-transparent"
      } w-full rounded-md flex items-center gap-x-2 hover:bg-indigo-500 hover:text-white cursor-pointer p-2 transition-all duration-200`}
    >
      <img src={user?.profilePic} alt={user?.name} className="w-10 h-10" />
      <h6 className="text-xl font-semibold">{user?.username}</h6>
    </div>
  );
};

export default User;
