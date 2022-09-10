import React from "react";
// Context
import { useGlobalContext } from "../../context";

const Rock = () => {
  const { onRPSIconClick } = useGlobalContext();
  return (
    <img
      src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/310/rock_1faa8.png"
      alt="Rock"
      onClick={() => onRPSIconClick("rock")}
    />
  );
};

export default Rock;
