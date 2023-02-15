import React from "react";
// Context
import { useGlobalContext } from "../../context";

const Rock = () => {
  const { onRPSIconClick } = useGlobalContext();
  return (
    <img
      src='https://i.pinimg.com/originals/9d/bb/14/9dbb14a92a7611794f3e5a0c80e4bad6.png'
      alt='Rock'
      onClick={() => onRPSIconClick("rock")}
    />
  );
};

export default Rock;
