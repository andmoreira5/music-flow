import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useEffect } from "react";
import { getGreeting } from "../../utils/getGreeting.js";
import { useAppContext } from "../../context/ContextProvider.jsx";
import LogoutButton from "../button/LogOut.jsx";
import { useLocation } from "react-router-dom";
import GoToHome from "../button/GoToHome.jsx";

export default function Header() {
  const { isDarkMode, setDarkMode, userData, screen } = useAppContext();
  const location = useLocation();

  const toggleDarkMode = (checked) => {
    localStorage.setItem("isDarkMode", checked);
    setDarkMode(checked);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);
  return (
    <div
      className={`fixed top-0 left-0 w-full flex flex-row justify-between p-3 border-b-2 
      dark:border-white border-black   ${screen.color}/40 
       backdrop-blur-md backdrop-saturate-150 z-50`}
    >
      <LogoutButton />
      <div
        className={`  dark:text-white  text-sky-800  text-center  items-center flex flex-col justify-center `}
      >
        <h1 className="font-bold text-[1.15rem] md:text-2xl mb-2">
          {screen.title == "HOME"
            ? getGreeting() + ", " + userData.name.toUpperCase() + "!"
            : screen.title}
        </h1>
        {screen.title == "HOME" && (
          <h2 className="hidden sm:block">{userData.userType}</h2>
        )}
      </div>
      {location.pathname == "/home" ? (
        <div
          className=" items-center justify-center flex flex-col bg-white  dark:bg-gray-600
            px-1 md:px-4 h-16 border-2 rounded py-1 border-white "
        >
          <DarkModeSwitch
            data-testid="darkModeSwitch"
            sunColor="#FC0 "
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={40}
          />
          <p className="text-center font-bold text-sky-800  dark:text-gray-200 dark:text-sm text-md hidden sm:block">
            {isDarkMode ? "DARK" : "LIGHT"}
          </p>
        </div>
      ) : (
        <GoToHome />
      )}
    </div>
  );
}
