import { useState, useEffect } from "react";
import { useAppContext } from "../../context/ContextProvider.jsx";
import SendButton from "../button/SendButton.jsx";
import { toast } from "react-toastify";
import { validateContact } from "../../utils/validateContact.js";
import ReturnButton from "../button/ReturnButton.jsx";

export default function DynamicForm() {
  const {
    columns,
    tableSelected,
    data,
    setData,
    isEditing,
    setIsEditing,
    selectedItem,
    setSelectedButtonManageRegistrations,
  } = useAppContext();
  const [formData, setFormData] = useState({});
  useEffect(() => {
    selectedItem && setFormData(selectedItem);
  }, [selectedItem]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateContact(formData.contact)) {
      toast.error("Número de contato inválido");
      return;
    }

    const currentArray = data?.[tableSelected] || [];

    const updatedItem = {
      ...formData,
      schoolClass: "SEM TURMA",
      photo: (formData.name || "").replace(/ /g, "+"),
    };

    let newArray;

    if (isEditing) {
      newArray = currentArray.map((item) =>
        item.id === selectedItem.id
          ? { ...updatedItem, id: selectedItem.id }
          : item
      );
    } else {
      const maxId = currentArray.reduce(
        (max, item) => Math.max(max, item.id || 0),
        0
      );
      updatedItem.id = maxId + 1;
      newArray = [...currentArray, updatedItem];
    }

    newArray.sort((a, b) => {
      const nameA = (a.name || "").toLowerCase();
      const nameB = (b.name || "").toLowerCase();
      return nameA.localeCompare(nameB);
    });

    setData((prevData) => ({
      ...prevData,
      [tableSelected]: newArray,
    }));

    setFormData({});
    setIsEditing(false);
    setSelectedButtonManageRegistrations(1);

    toast.success(
      isEditing
        ? "Cadastro atualizado com sucesso!"
        : "Cadastro adicionado com sucesso!"
    );
  };
  const handleReturn = () => {
    setIsEditing(false);
    setSelectedButtonManageRegistrations(1);
  };

  function maskPhone(value) {
    let numbers = value.replace(/\D/g, "").substring(0, 11);
    if (numbers.length > 6) {
      return `(${numbers.substring(0, 2)}) ${numbers.substring(
        2,
        7
      )}-${numbers.substring(7)}`;
    } else if (numbers.length > 2) {
      return `(${numbers.substring(0, 2)}) ${numbers.substring(2)}`;
    } else if (numbers.length > 0) {
      return `(${numbers}`;
    }
    return "";
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.toLowerCase().includes("contact")) {
      const maskedValue = maskPhone(value);
      setFormData((prev) => ({ ...prev, [name]: maskedValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value.toUpperCase() }));
    }
  };

  const items = columns?.[tableSelected] || [];

  return (
    <>
      <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
        {items.map((column, index) => {
          const field = column.field;

          return (
            <div key={index} className="mb-5 bg-gray-700 p-3 rounded-sm">
              <label className="text-gray-300 font-bold">
                {column.name + (column.required ? " (Obrigatório)" : "")}
                <input
                  type={column.type || "text"}
                  name={field}
                  required={column.required || false}
                  value={formData[field] || ""}
                  onChange={handleChange}
                  className="block w-full p-2 mt-1 bg-gray-300 rounded-sm text-black font-normal"
                />
              </label>
            </div>
          );
        })}
        {(isEditing || !selectedItem) && <SendButton />}
        {selectedItem && <ReturnButton onClick={handleReturn} />}
      </form>
    </>
  );
}
