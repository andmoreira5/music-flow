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
  const { data, tableSelected } = useAppContext();

  const showComponent = () => {
    switch (selectedButtom) {
      case 1:
        return <ListItemsManager />;
      case 2:
        return <DynamicForm />;
    }
  };

  return (
    <div className="mx-5">
      <ConfirmationModal />
      <div className="flex flex-row w-full justify-between mb-5 ">
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
              setSelectedButton(2);
            }}
          >
            <FaPlus size={25} />
          </IconCircleButton>
        </div>
      </div>
      {showComponent()}
    </div>
  );
}
