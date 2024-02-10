import Messages from "../features/home/Messages";
import Sidebar from "../features/home/sidebar/Sidebar";

const Home = () => {
  return (
    <section className="flex mx-auto w-full h-screen">
      <Sidebar />
      <Messages />
    </section>
  );
};

export default Home;
