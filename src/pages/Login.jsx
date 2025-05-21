import { useState, useEffect } from "react";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { toast } from "react-toastify";
import { version } from "../../package.json";
import MiniLoader from "../components/mini loader/MiniLoader.jsx";

export default function Login() {
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isDarkMode] = useState(true);
  const [carregando, setCarregando] = useState(false);
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.visualViewport?.height || window.innerHeight);
    };

    window.visualViewport?.addEventListener("resize", handleResize);
    return () => {
      window.visualViewport?.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleTogglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async () => {
    if (username === "" || password === "") {
      toast.error("E-MAIL OU SENHA NÃO PODEM FICAR VAZIOS");
    } else {
      setCarregando(true);
      setTimeout(() => {
        toast.success("LOGIN BEM SUCEDIDO");
        setCarregando(false);
      }, 3000);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div
      className="items-center justify-center flex flex-col h-full min-h-screen  bg-slate-900 "
      style={{ minHeight: viewportHeight }}
    >
      <div className="w-full max-w-sm  p-6 rounded-lg bg-gray-700 border-4 border-white">
        <div className="flex flex-row items-center justify-center mb-4 gap-1">
          <img src="../../public/favicon.svg" className="w-20 h-20" />
          <h1 className="text-center  text-2xl font-bold  text-white ">
            Bem-vindo(a) ao Music Flow
          </h1>
        </div>
        <input
          type="email"
          placeholder="E-mail"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded bg-white"
        />
        <div className="w-full mb-4 p-2 bg-white  mr-5 inset-y-0 right-0 flex items-center justify-center border border-gray-300 rounded">
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full bg-transparent"
          />
          {passwordVisible ? (
            <RiEyeOffFill
              onClick={handleTogglePasswordVisibility}
              className="h-6 w-6 cursor-pointer text-gray-500 hover:text-gray-700"
            />
          ) : (
            <RiEyeFill
              onClick={handleTogglePasswordVisibility}
              className="h-6 w-6 cursor-pointer text-gray-500 hover:text-gray-700"
            />
          )}
        </div>
        {carregando ? (
          <MiniLoader />
        ) : (
          <button
            onClick={handleLogin}
            className="w-full font-bold bg-blue-500 text-white py-2 rounded hover:bg-blue-600 cursor-pointer"
          >
            Login
          </button>
        )}
        <div className="bg-yellow-600 text-white font-bold rounded mt-10 p-2 text-center cursor-pointer">
          Esqueci a senha
        </div>
        <p className="text-center text-gray-300 mt-3 -mb-3">Versão {version}</p>
      </div>
    </div>
  );
}
