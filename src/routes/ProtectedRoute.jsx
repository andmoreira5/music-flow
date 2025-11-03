import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header/Header.jsx";
import { useAppContext } from "../context/ContextProvider.jsx";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate(`/login`, { replace: true });
      return;
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) return null;

  return (
    <>
      <Header />
      <div className="  min-h-screen dark:bg-gray-600 bg-blue-200 pt-28">
        {children}
      </div>
    </>
  );
};

export default ProtectedRoute;
