import { useState } from "react";

export function useUIStates() {
  const [isDarkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("isDarkMode") === "true";
  });

  const [screen, setScreen] = useState({ title: "HOME" });
  const [visibleConfirmationScreen, setVisibleConfirmationScreen] =
    useState(false);
  return {
    isDarkMode,
    setDarkMode,
    screen,
    setScreen,
    visibleConfirmationScreen,
    setVisibleConfirmationScreen,
  };
}
