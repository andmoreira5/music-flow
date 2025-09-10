import ListItemsManager from "../components/list/ListItemsManager.jsx";
import { useAppContext } from "../context/ContextProvider.jsx";
import DynamicForm from "../components/form/DynamicForm.jsx";
import ConfirmationModal from "../components/confirmation modal/ConfirmationModal.jsx";
import HeaderTotal from "../components/header total/HeaderTotal.jsx";

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
          <HeaderTotal
            array={data[tableSelected]}
            selected={selectedButtonManageRegistrations}
            setSelected={setSelectedButtonManageRegistrations}
            setItemSelected={setSelectedItem}
            subtitle={tableSelected.toUpperCase() + "(S)"}
          />

          <span className="w-full justify-center flex mb-5 dark:text-gray-300 text-gray-700 -mt-1 sm:-mt-12">
            Click the photo to see the registration details
          </span>
        </>
      )}
      {showComponent()}
    </div>
  );
}
