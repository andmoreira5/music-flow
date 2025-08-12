import { useState, useEffect } from "react";
import { course } from "../../data/course.js";
import { weekDays } from "../../data/weekDays.js";
import { useAppContext } from "../../context/ContextProvider.jsx";
import { getUrlPhoto } from "../../data/url.js";
import { formatBirthDate } from "../../utils/formatBirthDate.js";
import CardPerson from "../../components/card/CardPerson.jsx";
import SendButton from "../button/SendButton.jsx";
import { toast } from "react-toastify";

export default function AddClass() {
  const [formData, setFormData] = useState({
    course: course[0]?.id || "",
    weekDay: weekDays[0]?.id || "",
    time: "",
  });

  const [mode, setMode] = useState("student"); // student || professor
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const [selectedStudents, setSelectedStudents] = useState([]);
  const [selectedProfessors, setSelectedProfessors] = useState([]);

  const { data, setClasses, setSelectedButtonManageClasses, selectedItem } =
    useAppContext();

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const time = formData.time;
    if (!time || time.trim() === "") {
      toast.error("O campo 'horário' não pode ficar vazio.");
      return;
    }

    const timePattern = /^([01]\d|2[0-3]):([0-5]\d)$/;

    if (!timePattern.test(time)) {
      alert("O campo 'horário' deve estar no formato válido HH:MM.");
      return;
    }
    const courseObj = course.find((el) => el.id == formData.course);
    const weekDayObj = weekDays.find((el) => el.id == formData.weekDay);

    setClasses((prevClasses) => {
      const nextId =
        prevClasses.length > 0
          ? Math.max(...prevClasses.map((c) => c.id)) + 1
          : 1;

      const baseData = {
        id: selectedItem ? selectedItem.id : nextId,
        course: courseObj?.name || "Não encontrado",
        icon: courseObj?.icon || "",
        weekDay: weekDayObj?.name || "Não encontrado",
        time: formData.time,
        students: selectedStudents,
        professors: selectedProfessors,
      };

      return selectedItem
        ? prevClasses.map((c) => (c.id === selectedItem.id ? baseData : c))
        : [...prevClasses, baseData];
    });

    toast.success("Turma adicionada com sucesso!");
    setSelectedButtonManageClasses(1);
  }

  function handleAddPerson(item) {
    if (mode === "student") {
      if (!selectedStudents.some((s) => s.id === item.id)) {
        setSelectedStudents((prev) => [...prev, item]);
      }
    } else {
      if (!selectedProfessors.some((p) => p.id === item.id)) {
        setSelectedProfessors((prev) => [...prev, item]);
      }
    }
    setSearch("");
    setResults([]);
  }

  useEffect(() => {
    if (selectedItem) {
      console.log(selectedItem);
      setSelectedStudents(selectedItem.students);
      setSelectedProfessors(selectedItem.professors);
    }
  }, []);

  useEffect(() => {
    const list = mode === "student" ? data?.student : data?.professor;

    if (search.trim() && list) {
      const filtered = list
        .filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )
        .slice(0, 10);
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [search, mode, data]);

  return (
    <div className="relative">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 px-4 pt-4 rounded-md shadow sm:grid grid-cols-3 gap-10"
      >
        <div className="mb-5">
          <label className="text-gray-300 font-bold block mb-1">Curso</label>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
            className="block w-full p-2 bg-gray-300 rounded-sm text-black font-normal"
          >
            {course.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-5">
          <label className="text-gray-300 font-bold block mb-1">
            Dia da Semana
          </label>
          <select
            name="weekDay"
            value={formData.weekDay}
            onChange={handleChange}
            required
            className="block w-full p-2 bg-gray-300 rounded-sm text-black font-normal"
          >
            {weekDays.map((day) => (
              <option key={day.id} value={day.id}>
                {day.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-5">
          <label className="text-gray-300 font-bold block mb-1">Horário</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="block w-full p-2 bg-gray-300 rounded-sm text-black font-normal"
          />
        </div>
      </form>
      <SendButton onClick={handleSubmit} />

      <div className="mt-8 text-center">
        <span className="text-gray-300 font-bold mr-4">Modo de inserção:</span>
        <button
          type="button"
          onClick={() => setMode("student")}
          className={`px-4 py-2 rounded-l-lg ${
            mode === "student" ? "bg-green-700" : "bg-gray-500"
          } text-white font-semibold cursor-pointer`}
        >
          Alunos
        </button>
        <button
          type="button"
          onClick={() => setMode("professor")}
          className={`px-4 py-2 rounded-r-lg ${
            mode === "professor" ? "bg-green-700" : "bg-gray-500"
          } text-white font-semibold cursor-pointer`}
        >
          Professores
        </button>
      </div>

      <div className="mt-6 flex justify-center">
        <input
          type="text"
          placeholder={`Adicionar ${
            mode === "student" ? "aluno" : "professor"
          }...`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-1/2 p-2 bg-gray-200 text-black rounded"
        />
      </div>

      {results.length > 0 && (
        <ul className="mt-4 w-1/2 bg-white rounded shadow max-h-64 overflow-y-auto absolute z-50 left-1/2 -translate-x-1/2">
          {results.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-4 p-3 border-b hover:bg-gray-100 cursor-pointer"
              onClick={() => handleAddPerson(item)}
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

      <div className="mt-10">
        {selectedProfessors?.length > 0 && (
          <div className="mb-6">
            <h2 className="text-gray-300 font-bold text-lg mb-2">
              Professores Selecionados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedProfessors?.map((prof) => (
                <CardPerson key={prof.id} item={prof} showButtons={false} />
              ))}
            </div>
          </div>
        )}

        {selectedStudents.length > 0 && (
          <div>
            <h2 className="text-gray-300 font-bold text-lg mb-2">
              Alunos Selecionados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedStudents.map((student) => (
                <CardPerson
                  item={student}
                  key={student.id}
                  showButtons={false}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
