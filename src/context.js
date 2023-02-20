// React
import React, { useContext, createContext, useState, createRef } from "react";
// Data
import { gameResults } from "./data";

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const decisions = ["rock", "paper", "scissors"];

  const [score, setScore] = useState(
    Number(localStorage.getItem("RPS Score")) || 0
  );

  const [gameResult, setGameResult] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [impossibleMode, setImpossibleMode] = useState(false);

  const modalRef = createRef(null);

  // When an Icon is clicked
  const onRPSIconClick = (decision) => {
    const randomNumber = Math.floor(Math.random() * 3);
    const botDecision = decisions[randomNumber];
    const { results } = gameResults.find(
      (gameResult) => gameResult.type === decision
    );

    let resultMessage;
    let modalColor;
    switch (results[botDecision]) {
      case 1:
        resultMessage = `The Bot chose ${botDecision}! You won!`;
        modalColor = "green";
        break;
      case 0:
        resultMessage = `The Bot chose ${botDecision}! You drew!`;
        modalColor = "grey";
        break;
      case -1:
        resultMessage = `The Bot chose ${botDecision}! You lost!`;
        modalColor = "red";
        break;
      default:
        throw new Error("Invalid result number.");
    }

    const result = {
      msg: resultMessage,
      score: results[botDecision],
      modalColor,
    };

    if (impossibleMode) {
      setGameResult({
        msg: "You lost...",
        score: -999999999,
        modalColor: "red",
      });
      localStorage.setItem("RPS Score", -9999999999);
      setScore(-99999999999);
    } else {
      setGameResult(result);
      localStorage.setItem("RPS Score", score + result.score);
      setScore(score + result.score);
    }
    setShowModal(true);
  };

  // Handling Options
  const handleRPSOptions = (option, e) => {
    e.preventDefault();
    if (option === "Reset Score") {
      localStorage.setItem("RPS Score", 0);
      setScore(0);
    } else if (option === "Impossible Mode") {
      setImpossibleMode(true);
    } else if (option === "Normal Mode") {
      setImpossibleMode(false);
    }
  };

  return (
    <AppContext.Provider
      value={{
        gameResult,
        onRPSIconClick,
        showModal,
        setShowModal,
        modalRef,
        score,
        handleRPSOptions,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
