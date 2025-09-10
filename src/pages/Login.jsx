import { useState, useEffect } from "react";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { toast } from "react-toastify";
import { version } from "../../package.json";
import MiniLoader from "../components/mini loader/MiniLoader.jsx";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/ContextProvider.jsx";
import { dataLogin, userData } from "../data/login.js";

export default function Login() {
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const navigate = useNavigate();
  const { setIsLoggedIn, setUserData } = useAppContext();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isDarkMode] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    setUsername(dataLogin.email);
    setPassword(dataLogin.password);

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
      toast.error("EMAIL OR PASSWORD CANNOT BE EMPTY");
    } else if (username != dataLogin.email || password != dataLogin.password) {
      toast.error("EMAIL AND/OR PASSWORD INCORRECT!");
    } else {
      setLoading(true);
      setTimeout(() => {
        setIsLoggedIn(true);
        setUserData(userData);
        navigate("/home");
        setLoading(false);
      }, 1000);
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
          <img src="/favicon.svg" className="w-20 h-20" />
          <h1 className="text-center  text-2xl font-bold  text-white ">
            Welcome to Music Flow
          </h1>
        </div>
        <input
          data-testid="inputEmailLogin"
          type="email"
          placeholder="E-mail"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded bg-white"
        />
        <div className="w-full mb-4 p-2 bg-white  mr-5 inset-y-0 right-0 flex items-center justify-center border border-gray-300 rounded">
          <input
            data-testid="inputPasswordLogin"
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
        {loading ? (
          <MiniLoader data-testid="miniLoaderLogin" />
        ) : (
          <button
            data-testid="buttonLogin"
            onClick={handleLogin}
            className="w-full font-bold bg-blue-500 text-white py-2 rounded hover:bg-blue-600 cursor-pointer"
          >
            Login
          </button>
        )}

        <p className="text-center text-gray-300 mt-3 -mb-3">
          Version {version}
        </p>
      </div>
    </div>
  );
}
