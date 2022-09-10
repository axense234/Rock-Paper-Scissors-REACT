const CalcGameResult = (decision, botDecision) => {
  switch (decision) {
    case "rock":
      if (botDecision === "rock") {
        return { msg: "The Bot chose Rock! You tied!", score: 0 };
      } else if (botDecision === "paper") {
        return { msg: "The Bot chose Paper! You lost!", score: -1 };
      } else if (botDecision === "scissors") {
        return { msg: "The Bot chose Scissors! You won!", score: 1 };
      }
      break;

    case "paper":
      if (botDecision === "rock") {
        return { msg: "The Bot chose Rock! You won!", score: 1 };
      } else if (botDecision === "paper") {
        return { msg: "The Bot chose Paper! You tied!", score: 0 };
      } else if (botDecision === "scissors") {
        return { msg: "The Bot chose Scissors! You lost!", score: -1 };
      }
      break;

    case "scissors":
      if (botDecision === "rock") {
        return { msg: "The Bot chose Rock! You lost!", score: -1 };
      } else if (botDecision === "paper") {
        return { msg: "The Bot chose Paper! You won!", score: 1 };
      } else if (botDecision === "scissors") {
        return { msg: "The Bot chose Scissors! You tied!", score: 0 };
      }
      break;
    default:
      break;
  }
};

export default CalcGameResult;
