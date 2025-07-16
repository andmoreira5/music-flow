import { useState } from "react";
import { fieldDefinitions } from "../../data/fieldDefinitions.js";
import { useAppContext } from "../../context/ContextProvider.jsx";
import { listRequiredFields } from "../../data/listRequiredFields.js";
import useWindowWidth from "../../hooks/useWindowWidth.jsx";
import { renderInput } from "../../utils/renderItem.jsx";
import Send from "../button/Send.jsx";
import { toast } from "react-toastify";

export default function DynamicForm({ initialData = {}, setView }) {
  const [formData, setFormData] = useState(initialData);
  const { data, setData, tableSelected } = useAppContext();
  const windowWidth = useWindowWidth();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = () => {
    const emptyFields = listRequiredFields.filter(
      (field) => !formData[field] || formData[field].toString().trim() === ""
    );

    if (emptyFields.length > 0) {
      const campos = emptyFields.map(
        (f) => fieldDefinitions[tableSelected][f]?.label || f
      );
      alert("Preencha os campos obrigatórios: " + campos.join(", "));
      return;
    }

    const currentList = data[tableSelected] || [];
    const maxId = currentList.reduce(
      (max, item) => Math.max(max, item.id || 0),
      0
    );

    const newItem = {
      id: maxId + 1,
      ...formData,
      photo: formData.name.trim().replace(/\s+/g, "+"),
    };

    const updatedArray = [...currentList, newItem].sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    setData((prevData) => ({
      ...prevData,
      [tableSelected]: updatedArray,
    }));

    setFormData({});
    setView("list");
    toast.success("Adicionado com sucesso");
  };

  return (
    <>
      <form className="flex flex-wrap" onSubmit={handleSubmit}>
        {Object.entries(fieldDefinitions[tableSelected]).map(([key, def]) => (
          <div
            key={key}
            style={{
              marginBottom: 12,
              minWidth: windowWidth,
              maxWidth: windowWidth,
            }}
            className={`m-3 bg-gray-200 ${
              listRequiredFields.includes(key)
                ? " bg-gray-700 "
                : " bg-gray-500"
            }  rounded-md p-4 flex-1`}
          >
            <label className="block mb-2 font-bold text-white">
              {def.label +
                (listRequiredFields.includes(key) ? " (Obrigatório)" : "")}
            </label>
            {renderInput(key, def, formData, handleChange)}
          </div>
        ))}
        <Send />
      </form>
    </>
  );
}
