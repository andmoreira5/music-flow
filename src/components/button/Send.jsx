import { FaPaperPlane } from "react-icons/fa";

export default function Send() {
  return (
    <button
      type="submit"
      className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700
       text-white rounded-full w-20 h-20 flex flex-col items-center justify-center
        shadow-lg transition duration-300 cursor-pointer"
    >
      <FaPaperPlane size={20} className="mb-1" />
      <span className="text-xs font-semibold">Enviar</span>
    </button>
  );
}
