import React, { useEffect } from "react";
import RPSGameModal from "./RPSGameModal";
// Icons
import Rock from "./icons/Rock";
import Paper from "./icons/Paper";
import Scissors from "./icons/Scissors";
// Context
import { useGlobalContext } from "../context";

const RPSGame = () => {
  const { showModal, setShowModal, modalRef } = useGlobalContext();

  useEffect(() => {
    if (showModal && modalRef) {
      modalRef.current.style.opacity = "1";
      let timeout = setTimeout(() => {
        modalRef.current.style.opacity = "0";
        setShowModal(false);
      }, 3000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [showModal, setShowModal, modalRef]);

  return (
    <section className="rps-game">
      <div className="rps-game-icons">
        <Rock />
        <Paper />
        <Scissors />
      </div>
      <RPSGameModal />
    </section>
  );
};

export default RPSGame;
