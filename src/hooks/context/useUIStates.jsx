import { useState } from "react";

export function useUIStates() {
  const [isDarkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("isDarkMode") === "true";
  });

  return { isDarkMode, setDarkMode };
}
