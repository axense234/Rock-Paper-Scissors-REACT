import React from "react";
// Context
import { useGlobalContext } from "../../context";

const Scissors = () => {
  const { onRPSIconClick } = useGlobalContext();
  return (
    <img
      src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/310/scissors_2702-fe0f.png"
      alt="Scissors"
      onClick={() => onRPSIconClick("scissors")}
    />
  );
};

export default Scissors;
