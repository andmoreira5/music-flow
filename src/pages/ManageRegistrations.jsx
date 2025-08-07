import ListItemsManager from "../components/list/ListItemsManager.jsx";
import Total from "../components/card/Total.jsx";
import IconCircleButton from "../components/button/IconCircleButton.jsx";
import { FaList, FaPlus } from "react-icons/fa";
import { useAppContext } from "../context/ContextProvider.jsx";
import { translate } from "../data/translate.js";
import DynamicForm from "../components/form/DynamicForm.jsx";
import ConfirmationModal from "../components/confirmation modal/ConfirmationModal.jsx";

export default function ManageRegistrations() {
  const {
    data,
    tableSelected,
    isEditing,
    setSelectedItem,
    selectedButtonManageRegistrations,
    setSelectedButtonManageRegistrations,
  } = useAppContext();

  const showComponent = () => {
    switch (selectedButtonManageRegistrations) {
      case 1: //view
        return <ListItemsManager />;
      case 2: //add
        return <DynamicForm />;
    }
  };

  return (
    <div className="mx-5">
      <ConfirmationModal />
      {!isEditing && (
        <>
          <div className="flex flex-row w-full justify-between mb-5 text-white ">
            <Total
              quantity={data[tableSelected]?.length}
              subtitle={
                translate[tableSelected]?.toUpperCase() +
                (translate[tableSelected] == "Professor" ? "(ES)" : "(S)")
              }
            />

            <div className="flex flex-row gap-5">
              <IconCircleButton
                selected={selectedButtonManageRegistrations == 1}
                label="Lista"
                onClick={() => {
                  setSelectedButtonManageRegistrations(1);
                }}
              >
                <FaList size={25} />
              </IconCircleButton>
              <IconCircleButton
                selected={selectedButtonManageRegistrations == 2}
                label="Adicionar"
                onClick={() => {
                  setSelectedItem(null);
                  setSelectedButtonManageRegistrations(2);
                }}
              >
                <FaPlus size={25} />
              </IconCircleButton>
            </div>
          </div>
          <span className="w-full justify-center flex mb-5 dark:text-gray-300 text-gray-700 -mt-1 sm:-mt-12">
            Clique na foto para visualizar o cadastro
          </span>
        </>
      )}
      {showComponent()}
    </div>
  );
}
