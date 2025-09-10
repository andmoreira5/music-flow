import { FaRegPaperPlane } from "react-icons/fa";

export default function SendButton({ onClick }) {
  return (
    <div className="w-full justify-center flex mt-4 gap-5">
      <button
        data-testid="button-SendButton"
        onClick={onClick}
        type="submit"
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 z-50
        text-white rounded-full w-20 h-20 flex flex-col items-center justify-center
         shadow-lg transition duration-300 cursor-pointer"
      >
        <FaRegPaperPlane size={20} color="white" />
        <span>Submit</span>
      </button>
    </div>
  );
}
