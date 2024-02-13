import { useRef, useEffect } from "react";
import * as RiIcon from "react-icons/ri";
import { useSocketContext } from "../../../context/SocketProvider";
import { useGetMessageById } from "../../../hooks/useMessage";
import Loading from "../../../ui/Loading";
import Message from "./Message";
import MessageInput from "./MessageInput";

const MessageContainer = ({ user }) => {
  const { data, isLoading } = useGetMessageById(user?._id);
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(user?._id);

  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [data]);

  if (isLoading) return <Loading />;

  return (
    <section className="flex flex-col h-full">
      <header className="flex items-center justify-between py-3.5 px-2 shadow-sm border-b dark:border-slate-700">
        <div className="flex items-center gap-x-2">
          <img src={user?.profilePic} alt={user?.name} className="w-10 h-10" />
          <h6 className="text-xl font-semibold">{user?.username}</h6>
          {isOnline ? (
            <span className="w-3 h-3 animate-pulse rounded-full bg-green-500"></span>
          ) : null}
        </div>
        <RiIcon.RiSearchLine size={26} />
      </header>
      <div className="flex-1 overflow-y-auto scroll px-2">
        {!data?.length ? (
          <div className="flex justify-center h-screen items-center text-2xl font-semibold">
            <span className="bg-gray-200 px-4 py-1 rounded-lg shadow">... هیچ پیامی وجود ندارد</span>
          </div>
        ) : (
          data?.map((item) => (
            <Message item={item} key={item?._id} userSelect={user} />
          ))
        )}
      </div>
      <footer className="flex w-full items-center justify-between py-2 px-2 border-t dark:border-slate-700">
        <MessageInput user={user} />
      </footer>
    </section>
  );
};

export default MessageContainer;
