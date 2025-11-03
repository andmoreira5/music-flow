import { useEffect, useState } from "react";
import { getUrlPhoto } from "../../data/url.js";
import { formatBirthDate } from "../../utils/formatBirthDate.js";

export default function SearchAddPerson({ mode, dataList, onAddPerson }) {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (search.trim() && dataList) {
      const filtered = dataList
        .filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )
        .slice(0, 10);
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [search, dataList]);

  return (
    <div className="mt-6 flex justify-center relative">
      <input
        type="text"
        placeholder={`Add ${mode}...`}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-1/2 p-2 bg-gray-200 text-black rounded"
      />
      {results.length > 0 && (
        <ul className="mt-4 w-1/2 bg-white rounded shadow max-h-64 overflow-y-auto absolute z-50 left-1/2 -translate-x-1/2">
          {results.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-4 p-3 border-b hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                onAddPerson(item);
                setSearch("");
              }}
            >
              <img
                src={getUrlPhoto(item?.photo)}
                alt={item.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold">{item.name}</div>
                <div className="text-sm text-gray-500">
                  {formatBirthDate(item.dateOfBirth)}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
