import { inputstyle } from "../components/dynamic form/inputStyle.js";
import { listRequiredFields } from "../data/listRequiredFields.js";

export const renderInput = (key, def, formData, handleChange) => {
  const value = formData[key] || "";

  switch (def.type) {
    case "text":
    case "date":
    case "phone":
      return (
        <input
          className={inputstyle}
          type={def.type === "phone" ? "text" : def.type}
          name={key}
          value={value}
          required={listRequiredFields.includes(key)}
          onChange={handleChange}
        />
      );
    case "textarea":
      return (
        <textarea
          name={key}
          value={value}
          onChange={handleChange}
          required={listRequiredFields.includes(key)}
        />
      );
    case "select":
      return (
        <select name={key} value={value} onChange={handleChange}>
          {def.options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      );
    default:
      return null;
  }
};
