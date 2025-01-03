import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Aside } from "./Aside.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Aside />
  </StrictMode>
);
