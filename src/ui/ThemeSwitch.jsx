import * as RiIcon from "react-icons/ri";
import { useTheme } from "../context/ThemeProvider";

const ThemeSwitch = () => {
  const { dark, setDark } = useTheme();
  const handleThemeSwitch = () => {
    setDark(dark === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={handleThemeSwitch}
      className="flex items-center gap-x-2 hover:bg-indigo-500 hover:text-white rounded-md px-2 py-1.5 transition-all duration-300"
    >
      {dark === "light" ? (
        <RiIcon.RiMoonLine size={26} />
      ) : (
        <RiIcon.RiSunLine size={26} />
      )}
    </button>
  );
};

export default ThemeSwitch;
