import { FaTrashAlt } from "react-icons/fa";
import ButtonActionItem from "../button/ButtonActionItem.jsx";
import { getUrlPhoto } from "../../data/url.js";
import { useAppContext } from "../../context/ContextProvider.jsx";

export default function CardPerson({ item, showButtons = true }) {
  const { tableSelected, setVisibleConfirmationScreen, setSelectedItem } =
    useAppContext();
  const renderItem = () => {
    switch (tableSelected) {
      default:
        return (
          <img
            src={getUrlPhoto(item?.photo)}
            alt={item?.name}
            className="w-full h-full object-cover "
          />
        );
    }
  };
  return (
    <div
      className="bg-gray-800 relative rounded-lg shadow-md p-4 
        flex flex-col md:flex-row items-center text-white gap-4"
    >
      <div className="flex flex-row justify-around w-full">
        <div
          className="cursor-pointer flex-shrink-0 w-24 h-24 rounded-full 
          overflow-hidden border-4 border-white"
        >
          {renderItem()}
        </div>
        <div className="ml-4 flex-1">
          <h2 className="text-lg font-bold">{item?.name.toUpperCase()}</h2>
          <div className="pl-1">
            <p className="text-sm opacity-70">{item?.address}</p>
            <p className="text-sm opacity-70">{item?.schoolClass}</p>
          </div>
        </div>
      </div>

      {showButtons && (
        <div className="mr-0 sm:mr-2 flex flex-row sm:flex-col gap-5  ">
          {/* <ButtonActionItem color={"bg-blue-500"}>
            <FaPencilAlt size={20} color="white" />
            <span>Editar</span>
          </ButtonActionItem> */}
          <ButtonActionItem
            color={"bg-red-500"}
            onClick={() => {
              setVisibleConfirmationScreen(true);
              setSelectedItem(item);
            }}
          >
            <FaTrashAlt size={20} color="white" />
            <span>Excluir</span>
          </ButtonActionItem>
        </div>
      )}
    </div>
  );
}
