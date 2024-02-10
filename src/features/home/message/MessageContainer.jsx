import * as RiIcon from "react-icons/ri";
import MessageInput from "./MessageInput";

const MessageContainer = ({ user }) => {
  return (
    <section className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between py-3.5 px-2 shadow-sm border-b">
        <div className="flex items-center gap-x-2">
          <img src={user?.profilePic} alt={user?.name} className="w-10 h-10" />
          <h6 className="text-xl font-semibold">{user?.username}</h6>
        </div>
        <RiIcon.RiSearchLine className=" text-gray-900" size={26} />
      </header>
      <div className="flex-1">sss</div>
      <footer className="flex w-full items-center justify-between py-2 px-2 border-t">
        <MessageInput/>
      </footer>
    </section>
  );
};

export default MessageContainer;
