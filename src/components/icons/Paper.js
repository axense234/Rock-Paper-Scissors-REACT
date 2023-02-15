import React from "react";
// Context
import { useGlobalContext } from "../../context";

const Paper = () => {
  const { onRPSIconClick } = useGlobalContext();
  return (
    <img
      src='https://png.pngtree.com/png-vector/20220624/ourmid/pngtree-torn-notebook-paper-white-coil-png-image_5317122.png'
      alt='Paper'
      onClick={() => onRPSIconClick("paper")}
    />
  );
};

export default Paper;
