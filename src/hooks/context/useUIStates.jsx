import { useState } from "react";

export function useUIStates() {
  const [isDarkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("isDarkMode") === "true";
  });
  const [visibleConfirmationScreen, setVisibleConfirmationScreen] =
    useState(false);
  const [screen, setScreen] = useState({ title: "HOME" });
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingClass, setIsEditingClass] = useState(false);
  const [
    selectedButtonManageRegistrations,
    setSelectedButtonManageRegistrations,
  ] = useState(1);
  const [selectedButtonManageClasses, setSelectedButtonManageClasses] =
    useState(1);

  return {
    isDarkMode,
    setDarkMode,
    screen,
    setScreen,
    visibleConfirmationScreen,
    setVisibleConfirmationScreen,
    isEditing,
    setIsEditing,
    selectedButtonManageRegistrations,
    setSelectedButtonManageRegistrations,
    selectedButtonManageClasses,
    setSelectedButtonManageClasses,
    isEditingClass,
    setIsEditingClass,
  };
}
