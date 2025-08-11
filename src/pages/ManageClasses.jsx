import { useAppContext } from "../context/ContextProvider.jsx";
import ConfirmationModal from "../components/confirmation modal/ConfirmationModal.jsx";
import HeaderTotal from "../components/header total/HeaderTotal.jsx";
import AddClass from "../components/add class/AddClass.jsx";
import ListItemsManageClasses from "../components/list/ListItemsManageClasses.jsx";

export default function ManageClasses() {
  const {
    classes,
    isEditingClass,
    setSelectedClass,
    selectedButtonManageClasses,
    setSelectedButtonManageClasses,
  } = useAppContext();

  const showComponent = () => {
    switch (selectedButtonManageClasses) {
      case 1: //view
        return <ListItemsManageClasses />;
      case 2: //add
        return <AddClass />;
    }
  };

  return (
    <div className="mx-5">
      <ConfirmationModal />
      {!isEditingClass && (
        <>
          <HeaderTotal
            array={classes}
            selected={selectedButtonManageClasses}
            setSelected={setSelectedButtonManageClasses}
            setItemSelected={setSelectedClass}
            subtitle="TURMA(S)"
          />
          <span className="w-full justify-center flex mb-5 dark:text-gray-300 text-gray-700 -mt-1 sm:-mt-12">
            Clique na foto para visualizar o cadastro
          </span>
        </>
      )}
      {showComponent()}
    </div>
  );
}
