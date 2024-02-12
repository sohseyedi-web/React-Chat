import * as RiIcon from "react-icons/ri";
import MessageLayout from "../features/home/message/MessageLayout";
import Sidebar from "../features/home/sidebar/Sidebar";
import useHandleUsers from "../zustand/useHandleUsers";

const Home = () => {
  const { isActive, setIsActive } = useHandleUsers();

  return (
    <section className="flex mx-auto w-full h-screen relative overflow-hidden">
      <Sidebar />
      <MessageLayout />
      {!isActive ? (
        <div
          onClick={() => setIsActive(!isActive)}
          className="absolute top-1/2 -left-2 bg-slate-400 rounded-full text-white cursor-pointer transition-all"
        >
          <RiIcon.RiArrowRightDoubleLine size={26} />
        </div>
      ) : null}
    </section>
  );
};

export default Home;
