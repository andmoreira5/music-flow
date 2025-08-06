import { toast } from "react-toastify";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { useAppContext } from "../../context/ContextProvider.jsx";
import CardPerson from "../card/CardPerson.jsx";

export default function ConfirmationModal() {
  const {
    setData,
    visibleConfirmationScreen,
    setVisibleConfirmationScreen,
    tableSelected,
    selectedItem,
  } = useAppContext();

  async function confirmAction() {
    console.log(selectedItem);
    setData((prevState) => ({
      ...prevState,
      [tableSelected]: prevState[tableSelected].filter(
        (el) => el.id != selectedItem.id
      ),
    }));
    setVisibleConfirmationScreen(false);
    toast.success("Removido com sucesso!");
  }

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50 transition-opacity duration-500 backdrop-blur-md
    ${
      visibleConfirmationScreen
        ? "opacity-100"
        : "opacity-0 pointer-events-none"
    }`}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)",
      }}
      onTransitionEnd={() => {
        if (visibleConfirmationScreen) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
        }
      }}
    >
      <div className="bg-gray-700 p-8 rounded-lg ">
        <div
          className={`text-xl font-bold mb-4  p-5 text-white
            -m-8  rounded-t-lg text-center border-b-4 bg-red-700
            `}
        >
          CONFIRMAR EXCLUSÃO?
        </div>

        <CardPerson index={1000} item={selectedItem} showButtons={false} />
        <div className="flex justify-around mt-7">
          <button
            className=" font-bold flex items-center justify-center px-4 py-2 min-w-30 w-2/5
                 bg-green-600 text-white rounded-full space-x-2 cursor-pointer"
            onClick={confirmAction}
          >
            <FaCheckCircle size={20} color="white" />
            <span>OK</span>
          </button>
          <button
            className=" font-bold flex items-center justify-center px-4 py-2 min-w-32 w-2/5
                 bg-red-500 text-white rounded-full space-x-2 cursor-pointer"
            onClick={() => {
              setVisibleConfirmationScreen(false);
            }}
          >
            <FaTimesCircle size={20} color="white" />
            <span>Cancelar</span>
          </button>
        </div>
      </div>
    </div>
  );
}
