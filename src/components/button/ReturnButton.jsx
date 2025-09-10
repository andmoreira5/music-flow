import { FaUndo } from "react-icons/fa";

export default function ReturnButton({ onClick }) {
  return (
    <div className="w-full justify-center flex mt-4 gap-5 ">
      <button
        data-testid="button-ReturnButton"
        onClick={onClick}
        className="fixed bottom-6 left-6 bg-amber-800 hover:bg-amber-700
        text-white rounded-full w-20 h-20 flex flex-col items-center justify-center
         shadow-lg transition duration-300 cursor-pointer z-50"
      >
        <FaUndo size={20} color="white" />
        <span>Back</span>
      </button>
    </div>
  );
}
