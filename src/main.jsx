import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import { InitialStatesProvider } from "./context/InitialStates.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <InitialStatesProvider>
        <App />
      </InitialStatesProvider>
    </AuthProvider>
  </BrowserRouter>
);
