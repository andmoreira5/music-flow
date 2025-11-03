import { useAppContext } from "../../context/ContextProvider.jsx";
import CardPerson from "../card/CardPerson.jsx";

export default function ListItemsManager() {
  const { data, tableSelected } = useAppContext();

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {data && data[tableSelected].length > 0 ? (
          data[tableSelected].map((el, index) => (
            <CardPerson item={el} key={index} />
          ))
        ) : (
          <div>NO ENTRIES</div>
        )}
      </div>
    </>
  );
}
