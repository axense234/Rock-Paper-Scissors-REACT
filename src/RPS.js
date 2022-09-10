import React from "react";
// Components
import RPSTitle from "./components/RPSTitle";
import RPSGame from "./components/RPSGame";
import RPSOptions from "./components/RPSOptions";
// Styles
import "./styles.css";
// Context
import { useGlobalContext } from "./context";

const RPS = () => {
  const { score } = useGlobalContext();
  return (
    <>
      <p id="score-number">{score}</p>
      <main className="rps-page">
        <RPSTitle />
        <div className="rps-page-content">
          <RPSGame />
          <RPSOptions />
        </div>
      </main>
    </>
  );
};

export default RPS;
