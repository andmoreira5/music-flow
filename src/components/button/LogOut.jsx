import { BiLogOut } from "react-icons/bi";
import { useAppContext } from "../../context/ContextProvider.jsx";

const LogoutButton = () => {
  const { setIsLoggedIn } = useAppContext();
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <button
      data-testid="logoutButton"
      onClick={handleLogout}
      className=" bg-red-500 border-2 border-white justify-center 
      rounded-md px-2 h-16 md:px-4 py-1 md:py-2 flex flex-col items-center cursor-pointer"
    >
      <BiLogOut size={35} color="white" />
      <span className="text-sm hidden sm:block text-white font-bold">
        LOGOUT
      </span>
    </button>
  );
};

export default LogoutButton;
