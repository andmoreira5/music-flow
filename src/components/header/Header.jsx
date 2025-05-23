//component under construction

import { DarkModeSwitch } from "react-toggle-dark-mode";
// import { useCatequese } from "../../context/CatequeseProvider";
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
import { getGreeting } from "../../helpers/getGreeting.js";

export default function Header() {
  //   const { isDarkMode, setDarkMode, userData, tela } = useCatequese();

  //   const location = useLocation();
  //   const toggleDarkMode = (checked) => {
  //     localStorage.setItem("isDarkMode", checked);
  //     setDarkMode(checked);
  //   };

  //   useEffect(() => {
  //     if (isDarkMode) {
  //       document.documentElement.classList.add("dark");
  //     } else {
  //       document.documentElement.classList.remove("dark");
  //     }
  //   }, [isDarkMode]);

  return (
    <div
      className={`fixed top-0 left-0 w-full flex flex-row justify-between p-3 border-b-2 
       dark:border-white border-black  ${"tela.cor"} bg-sky-800  z-50  `}
    >
      {/* <LogoutButton /> */}
      {/* <div
        className={`${
          tela.titulo == "HOME" ? "text-sky-200" : "text-white"
        }  text-center  items-center flex flex-col justify-center `}
      >
        <h1 className="font-bold text-[1.15rem] md:text-2xl mb-2">
          {tela.titulo == "HOME"
            ? getGreeting() + ", " + userData.nome + "!"
            : tela.titulo}
        </h1>
        <h2 className="hidden sm:block">{userData.tipoUsuario}</h2>
      </div>
      {location.pathname == "/home" ? (
        <div
          className=" items-center justify-center flex flex-col bg-sky-300  dark:bg-gray-600
         px-1 md:px-4 h-16 border-2 rounded py-1 dark:border-white "
        >
          <DarkModeSwitch
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={40}
          />
          <p className="text-center font-bold  dark:text-gray-200 text-sm hidden sm:block">
            {isDarkMode ? "ESCURO" : "CLARO"}
          </p>
        </div>
      ) : (
        <></>
        // <VoltarAoInicio />
      )} */}
    </div>
  );
}
