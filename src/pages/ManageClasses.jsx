import { useAppContext } from "../context/ContextProvider.jsx";
import ConfirmationModal from "../components/confirmation modal/ConfirmationModal.jsx";
import HeaderTotal from "../components/header total/HeaderTotal.jsx";
import AddClass from "../components/add class/AddClass.jsx";
import ListItemsManageClasses from "../components/list/ListItemsManageClasses.jsx";

export default function ManageClasses() {
  const {
    classes,
    isEditingClass,
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
            subtitle="CLASS(ES)"
          />
        </>
      )}
      {showComponent()}
    </div>
  );
}
