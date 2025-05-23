import { createContext } from "react";
import useDataState from "../hooks/context/useDataState.jsx";

const MainContext = createContext();

export default function ContextProvider({ children }) {
  const dataState = useDataState();

  return (
    <MainContext.Provider value={{ ...dataState }}>
      {children}
    </MainContext.Provider>
  );
}
