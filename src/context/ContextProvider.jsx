import { createContext, useContext } from "react";
import useDataState from "../hooks/context/useDataState.jsx";
import { useUIStates } from "../hooks/context/useUIStates.jsx";

const MainContext = createContext();

export default function ContextProvider({ children }) {
  const dataState = useDataState();
  const dataUI = useUIStates();

  return (
    <MainContext.Provider value={{ ...dataState, ...dataUI }}>
      {children}
    </MainContext.Provider>
  );
}

export const useAppContext = () => useContext(MainContext);
