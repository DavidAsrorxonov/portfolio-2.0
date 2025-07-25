import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { NumberOfChildrenProvider } from "./context/NumberOfChildrenContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NumberOfChildrenProvider>
      <App />
    </NumberOfChildrenProvider>
  </StrictMode>
);
