import * as RiIcon from "react-icons/ri";
import { useSocketContext } from "../../../context/SocketProvider";
import { useGetMessageById } from "../../../hooks/useMessage";
import MessageInput from "./MessageInput";

const MessageContainer = ({ user }) => {

  const {data,isLoading} = useGetMessageById(user?._id);
  const {onlineUsers} = useSocketContext();
  const isOnline = onlineUsers.includes(user?._id);

  console.log(isOnline)

  return (
    <section className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between py-3.5 px-2 shadow-sm border-b">
        <div className="flex items-center gap-x-2">
          <img src={user?.profilePic} alt={user?.name} className="w-10 h-10" />
          <h6 className="text-xl font-semibold">{user?.username}</h6>
          {isOnline ? <span className="w-3 h-3 animate-pulse rounded-full bg-green-500"></span> : null}
        </div>
        <RiIcon.RiSearchLine className=" text-gray-900" size={26} />
      </header>
      <div className="flex-1">sss</div>
      <footer className="flex w-full items-center justify-between py-2 px-2 border-t">
        <MessageInput user={user}/>
      </footer>
    </section>
  );
};

export default MessageContainer;
