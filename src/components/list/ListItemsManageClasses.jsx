import { useAppContext } from "../../context/ContextProvider.jsx";
import CardClass from "../card/CardClass.jsx";

export default function ListItemsManageClasses() {
  const { classes } = useAppContext();

  return (
    <>
      {classes && classes.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {classes.map((el, index) => (
            <CardClass key={index} item={el} />
          ))}
        </div>
      ) : (
        <div className="dark: text-gray-300 text-center">NO ENTRIES</div>
      )}
    </>
  );
}
