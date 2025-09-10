import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import ButtonActionItem from "../button/ButtonActionItem.jsx";
import { useAppContext } from "../../context/ContextProvider.jsx";

export default function CardClass({ item, showButtons = true }) {
  const {
    setSelectedItem,
    setVisibleConfirmationScreen,
    setIsEditing,
    setSelectedButtonManageClasses,
  } = useAppContext();
  const IconComponent = item?.icon;
  const handleDelete = () => {
    setSelectedItem(item);
    setVisibleConfirmationScreen(true);
  };

  const handleEdit = () => {
    setSelectedItem(item);
    setIsEditing(true);
    setSelectedButtonManageClasses(2);
  };

  return (
    <div
      className="bg-gray-800 relative rounded-lg shadow-md p-4  overflow-hidden
        flex flex-col md:flex-row items-center text-white gap-4"
    >
      {IconComponent && (
        <div
          className="absolute top-[-40px] left-[-10px] text-[200px] 
      text-white opacity-10 pointer-events-none select-none"
          aria-hidden="true"
        >
          <IconComponent />
        </div>
      )}

      <div className="flex flex-row justify-around w-full">
        <div className="ml-4 flex-1">
          <h2 className="text-lg font-bold">{item?.course?.toUpperCase()}</h2>
          <div className="pl-1">
            <p className="text-sm opacity-70">{item?.time}</p>
            <p className="text-sm opacity-70">
              {item?.students?.length} STUDENT(S) ENROLLED
            </p>
          </div>
        </div>
      </div>

      {showButtons && (
        <div className="mr-0 sm:mr-2 flex flex-row sm:flex-col gap-5  ">
          <ButtonActionItem color={"bg-blue-500"} onClick={handleEdit}>
            <FaPencilAlt size={20} color="white" />
            <span>Edit</span>
          </ButtonActionItem>

          <ButtonActionItem color={"bg-red-500"} onClick={handleDelete}>
            <FaTrashAlt size={20} color="white" />
            <span>Delete</span>
          </ButtonActionItem>
        </div>
      )}
    </div>
  );
}
