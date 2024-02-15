import React from "react";
import useHandleUsers from "../zustand/useHandleUsers";

const Back = () => {
  const { isActive, setIsActive } = useHandleUsers();

  return (
    isActive && (
      <div
        className="lg:hidden fixed block w-full h-full top-0 left-0 bg-[rgba(0,0,0,.5)] z-10 transition-all duration-300"
        onClick={() => setIsActive(!isActive)}
      ></div>
    )
  );
};

export default Back;
