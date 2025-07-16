import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContextProvider from "./context/ContextProvider.jsx";
import ConfirmationScreen from "./components/confirmation screen/ConfirmationScreen.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <App />
      <ToastContainer theme="dark" autoClose={10000} />
      <ConfirmationScreen />
    </ContextProvider>
  </StrictMode>
);
