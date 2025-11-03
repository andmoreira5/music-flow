import { FaList, FaPlus } from "react-icons/fa";
import IconCircleButton from "../button/IconCircleButton.jsx";
import Total from "../card/Total.jsx";
import { useAppContext } from "../../context/ContextProvider.jsx";

export default function HeaderTotal({
  array,
  selected,
  setSelected,
  subtitle,
}) {
  const { setSelectedItem } = useAppContext();
  return (
    <div className="flex flex-row w-full justify-between mb-5 text-white ">
      <Total quantity={array?.length} subtitle={subtitle} />

      <div className="flex flex-row gap-5">
        <IconCircleButton
          selected={selected == 1}
          label="List"
          onClick={() => {
            setSelected(1);
          }}
        >
          <FaList size={25} />
        </IconCircleButton>
        <IconCircleButton
          selected={selected == 2}
          label="Add"
          onClick={() => {
            setSelectedItem(null);
            setSelected(2);
          }}
        >
          <FaPlus size={25} />
        </IconCircleButton>
      </div>
    </div>
  );
}
