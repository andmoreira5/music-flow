import { useState } from "react";
import ListItemsManager from "../components/list/ListItemsManager.jsx";
import Total from "../components/card/Total.jsx";
import IconCircleButton from "../components/button/IconCircleButton.jsx";
import { FaPlus, FaUser } from "react-icons/fa";
import { useAppContext } from "../context/ContextProvider.jsx";
import { translate } from "../data/translate.js";
import DynamicForm from "../components/form/DynamicForm.jsx";
import ConfirmationModal from "../components/confirmation modal/ConfirmationModal.jsx";

export default function ManageRegistrations() {
  const [selectedButtom, setSelectedButton] = useState(1);
  const { data, tableSelected, isEditing, setSelectedItem } = useAppContext();

  const showComponent = () => {
    switch (selectedButtom) {
      case 1: //view
        return isEditing ? (
          <DynamicForm setSelectedButton={setSelectedButton} />
        ) : (
          <ListItemsManager />
        );
      case 2: //add
        return <DynamicForm setSelectedButton={setSelectedButton} />;
    }
  };

  return (
    <div className="mx-5">
      <ConfirmationModal />
      {!isEditing && (
        <>
          <div className="flex flex-row w-full justify-between mb-5 text-white ">
            <Total
              quantity={data[tableSelected].length}
              subtitle={translate[tableSelected].toUpperCase() + "(S)"}
            />

            <div className="flex flex-row gap-5">
              <IconCircleButton
                selected={selectedButtom == 1}
                label={translate[tableSelected] + "(s)"}
                onClick={() => {
                  setSelectedButton(1);
                }}
              >
                <FaUser size={25} />
              </IconCircleButton>
              <IconCircleButton
                selected={selectedButtom == 2}
                label="Adicionar"
                onClick={() => {
                  setSelectedItem(null);
                  setSelectedButton(2);
                }}
              >
                <FaPlus size={25} />
              </IconCircleButton>
            </div>
          </div>
          <span className="w-full justify-center flex mb-5 text-gray-300 -mt-1 sm:-mt-12">
            Clique na foto para visualizar o cadastro
          </span>
        </>
      )}
      {showComponent()}
    </div>
  );
}
