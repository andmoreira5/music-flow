import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import ButtonActionItem from "../button/ButtonActionItem.jsx";
import { getUrlPhoto } from "../../data/url.js";
import { useAppContext } from "../../context/ContextProvider.jsx";

export default function CardPerson({
  item,
  showButtons = true,
  showDelete = false,
}) {
  const {
    tableSelected,
    setSelectedItem,
    setVisibleConfirmationScreen,
    setIsEditing,
    setSelectedButtonManageRegistrations,
  } = useAppContext();
  const handleDelete = () => {
    setSelectedItem(item);
    setVisibleConfirmationScreen(true);
  };

  const handleEdit = () => {
    setSelectedItem(item);
    setIsEditing(true);
    setSelectedButtonManageRegistrations(2);
  };

  const handleView = () => {
    setSelectedItem(item);
    setIsEditing(false);
    setSelectedButtonManageRegistrations(2);
  };

  const renderItem = () => {
    return (
      <img
        onClick={handleView}
        src={getUrlPhoto(item?.photo)}
        alt={item?.name}
        className="w-full h-full object-cover "
      />
    );
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
          <h2 className="text-lg font-bold">{item?.name?.toUpperCase()}</h2>
          <div className="pl-1">
            <p className="text-sm opacity-70">{item?.address}</p>
          </div>
        </div>
      </div>

      {showButtons && (
        <div className="mr-0 sm:mr-2 flex flex-row sm:flex-col gap-5  ">
          <ButtonActionItem
            data-cy="edit-button"
            color={"bg-blue-500"}
            onClick={handleEdit}
          >
            <FaPencilAlt size={20} color="white" />
            <span>Edit</span>
          </ButtonActionItem>
          {tableSelected == "localidade" && item.id == 1 ? (
            <></>
          ) : (
            <ButtonActionItem color={"bg-red-500"} onClick={handleDelete}>
              <FaTrashAlt size={20} color="white" />
              <span>Delete</span>
            </ButtonActionItem>
          )}
        </div>
      )}
      {showDelete && (
        <div className="absolute bg-red-800 -right-3 -top-3 p-3 rounded-3xl border-2 border-white ">
          <FaTrashAlt />
        </div>
      )}
    </div>
  );
}
