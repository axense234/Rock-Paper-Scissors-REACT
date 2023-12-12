export const rpsOptions = [
  { id: 1, optionName: "Reset Score" },
  { id: 2, optionName: "Impossible Mode" },
  { id: 3, optionName: "Normal Mode" },
];

export const gameResults = [
  { id: 1, type: "rock", results: { rock: 0, paper: -1, scissors: 1 } },
  { id: 2, type: "paper", results: { rock: 1, paper: 0, scissors: -1 } },
  { id: 3, type: "scissors", results: { rock: -1, paper: 1, scissors: 0 } },
];

export const actionDowntime = 2000; // miliseconds
