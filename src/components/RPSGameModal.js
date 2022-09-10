import React from "react";
// Context
import { useGlobalContext } from "../context";

const RPSGameModal = () => {
  const { gameResult, modalRef } = useGlobalContext();

  return (
    <div className="rps-game-result" ref={modalRef}>
      <h2>{gameResult.msg}</h2>
      <p>score {gameResult.score}</p>
    </div>
  );
};

export default RPSGameModal;
