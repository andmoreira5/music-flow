import { useState } from "react";
import ListItemsManager from "../components/list/ListItemsManager.jsx";
import DynamicForm from "../components/dynamic form/DynamicForm.jsx";

export default function ManageRegistrations() {
  const [view, setView] = useState("list"); // list or form
  const commonStyle =
    "px-4 py-2 rounded-lg font-semibold shadow-md transition duration-300 cursor-pointer";
  return (
    <div className="mx-5 py-4">
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setView("list")}
          className={
            commonStyle +
            ` ${
              view === "list"
                ? "bg-blue-600 text-white "
                : "bg-white text-blue-600 border border-blue-600  "
            }`
          }
        >
          Ver todos
        </button>
        <button
          onClick={() => setView("form")}
          className={
            commonStyle +
            ` ${
              view === "form"
                ? "bg-green-600 text-white"
                : "bg-white text-green-600 border border-green-600  "
            }`
          }
        >
          Adicionar
        </button>
      </div>

      {view === "list" && <ListItemsManager />}
      {view === "form" && <DynamicForm setView={setView} />}
    </div>
  );
}
