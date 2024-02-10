import { IoMdFingerPrint } from "react-icons/io";

import Messages from "../features/home/Messages";
import Sidebar from "../features/home/sidebar/Sidebar";
import useHandleUsers from "../zustand/useHandleUsers";

const Home = () => {
  const { isActive, setIsActive } = useHandleUsers();

  return (
    <section className="flex mx-auto w-full h-screen relative">
      <Sidebar />
      <Messages />
      <div
        onClick={() => setIsActive(!isActive)}
        className="absolute left-2 top-2 cursor-pointer"
      >
        <IoMdFingerPrint size={35} />
      </div>
    </section>
  );
};

export default Home;
