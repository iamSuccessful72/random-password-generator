import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import PasswordGenerator from "./PasswordGenrator";

ReactDOM.createRoot(document.getElementById("root") as HTMLDivElement).render(
  <React.StrictMode>
    <PasswordGenerator />
  </React.StrictMode>
);
