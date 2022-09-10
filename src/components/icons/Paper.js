import React from "react";
// Context
import { useGlobalContext } from "../../context";

const Paper = () => {
  const { onRPSIconClick } = useGlobalContext();
  return (
    <img
      src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/310/page-facing-up_1f4c4.png"
      alt="Paper"
      onClick={() => onRPSIconClick("paper")}
    />
  );
};

export default Paper;
