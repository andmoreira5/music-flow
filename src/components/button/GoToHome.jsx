import { IoHome } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/ContextProvider.jsx";
import { setBarColor } from "../../utils/setBarColor.js";

export default function GoToHome() {
  const navigate = useNavigate();
  const { setScreen } = useAppContext();

  return (
    <button
      data-testid="button-GoToHome"
      onClick={() => {
        setScreen({ title: "HOME", color: "bg-slate-800" });
        setBarColor("#1d293d");
        navigate("/home");
      }}
      className=" bg-green-700 border-2 border-white  justify-center
      rounded-md px-2 md:px-4 h-16 py-2 flex flex-col items-center cursor-pointer"
    >
      <IoHome size={35} className="mb-1" color="white" />
      <span className="text-sm text-white font-bold hidden sm:block">HOME</span>
    </button>
  );
}
