import React from "react";
// Context
import { useGlobalContext } from "../../context";

const Scissors = () => {
  const { onRPSIconClick } = useGlobalContext();
  return (
    <img
      src='https://png.pngtree.com/element_our/20190529/ourmid/pngtree-an-office-scissors-illustration-image_1227636.jpg'
      alt='Scissors'
      onClick={() => onRPSIconClick("scissors")}
    />
  );
};

export default Scissors;
