// React
import { useEffect } from "react";
// Context
import { useGlobalContext } from "../context";

const RPSGameModal = () => {
  const { gameResult, showModal, setShowModal, modalRef } = useGlobalContext();

  useModalTransition(showModal, modalRef, setShowModal);

  return (
    <div
      className='rps-game-result'
      ref={modalRef}
      style={{
        backgroundColor: gameResult.modalColor,
        boxShadow: `1px 1px 4px 2px ${gameResult.modalColor}`,
      }}
    >
      <h2>{gameResult.msg}</h2>
      <p>score {gameResult.score}</p>
    </div>
  );
};

const useModalTransition = (showModal, modalRef, setShowModal) => {
  useEffect(() => {
    let timeout;
    const modal = modalRef.current;
    if (showModal) {
      modal.style.opacity = "1";
      timeout = setTimeout(() => {
        setShowModal(false);
      }, 2000);
    } else {
      modal.style.opacity = "0";
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [showModal, modalRef, setShowModal]);
};

export default RPSGameModal;
