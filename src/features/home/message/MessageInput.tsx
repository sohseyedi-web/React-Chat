import React,{ useState } from "react";
import { TbSend } from "react-icons/tb";
import { useSendMessageUser } from "../../../hooks/useMessage";
import Loading from "../../../ui/Loading";

const MessageInput = ({ user }) => {
  const [message, setMessage] = useState<string>("");
  const { isUpdating, sendMessages } = useSendMessageUser();

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message.length) return;
    const id = user?._id;
    await sendMessages({ id, message });
    setMessage("");
  };

  return (
    <form className="w-full relative" onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message...."
        className="input input-bordered h-[60px] w-full focus:bg-white bg-gray-100 dark:bg-slate-900 px-2 text-lg transition-all duration-300 outline-none"
      />
      <button className="absolute right-2 top-2 btn btn-circle btn-success text-white">
        {isUpdating ? <Loading /> : <TbSend size={30} />}
      </button>
    </form>
  );
};

export default MessageInput;
