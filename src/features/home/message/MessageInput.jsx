import { TbSend } from "react-icons/tb";

const MessageInput = () => {
  return (
    <form className="w-full relative">
      <input
        type="text"
        placeholder="Message...."
        className="input input-bordered h-[60px] w-full focus:bg-white bg-gray-100 dark:bg-slate-900 px-2 text-lg transition-all duration-300 outline-none"
      />
      <button className="absolute right-2 top-2 btn btn-circle btn-success text-white">
        <TbSend size={30}/>
      </button>
    </form>
  );
};

export default MessageInput;
