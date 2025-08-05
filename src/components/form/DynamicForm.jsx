import { useState } from "react";
import { useAppContext } from "../../context/ContextProvider.jsx";
import SendButton from "../button/SendButton.jsx";

export default function DynamicForm() {
  const { columns, tableSelected, data, setData } = useAppContext();
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentArray = data?.[tableSelected] || [];

    const maxId = currentArray.reduce((max, item) => {
      return item.id > max ? item.id : max;
    }, 0);

    const newItem = {
      ...formData,
      id: maxId + 1,
      schoolClass: "SEM TURMA",
      photo: (formData.name || "").replace(/ /g, "+"),
    };

    const newArray = [...currentArray, newItem];

    newArray.sort((a, b) => {
      const nameA = (a.name || "").toLowerCase();
      const nameB = (b.name || "").toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });

    setData((prevData) => ({
      ...prevData,
      [tableSelected]: newArray,
    }));

    setFormData({});
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
      <SendButton />
    </form>
  );
}
