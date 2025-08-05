import { useState } from "react";

export function useUIStates() {
  const [isDarkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("isDarkMode") === "true";
  });
  const [visibleConfirmationScreen, setVisibleConfirmationScreen] =
    useState(false);
  const [screen, setScreen] = useState({ title: "HOME" });

  return {
    isDarkMode,
    setDarkMode,
    screen,
    setScreen,
    visibleConfirmationScreen,
    setVisibleConfirmationScreen,
  };
}
