import React from "react";
import { createRoot } from "react-dom/client";

// Rock Paper Scissors
import RPS from "./RPS";
// Context
import { AppProvider } from "./context";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AppProvider>
      <RPS />
    </AppProvider>
  </React.StrictMode>
);
