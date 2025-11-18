import { useState, useEffect } from "react";
import { course } from "../../data/course.js";
import { weekDays } from "../../data/weekDays.js";
import { useAppContext } from "../../context/ContextProvider.jsx";
import { toast } from "react-toastify";
import SendButton from "../button/SendButton.jsx";
import ModeSelector from "../mode selector/ModeSelector.jsx";
import SearchAddPerson from "../search add person/SearchAddPerson.jsx";
import SelectedPerson from "../selected person/SelectedPerson.jsx";
import FormClass from "../form/FormClass.jsx";

export default function AddClass() {
  const [formData, setFormData] = useState({
    course: course[0]?.id || "",
    weekDay: weekDays[0]?.id || "",
    time: "",
  });
  const [mode, setMode] = useState("student");
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [selectedProfessors, setSelectedProfessors] = useState([]);
  const { data, setClasses, setSelectedButtonManageClasses, selectedItem } =
    useAppContext();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleAddPerson = (item) => {
    if (mode === "student") {
      if (!selectedStudents.some((s) => s.id === item.id))
        setSelectedStudents((prev) => [...prev, item]);
    } else {
      if (!selectedProfessors.some((p) => p.id === item.id))
        setSelectedProfessors((prev) => [...prev, item]);
    }
  };

  const handleRemovePerson = (item) => {
    if (mode === "student") {
      setSelectedStudents((prev) => prev.filter((el) => el.id != item.id));
    } else {
      setSelectedProfessors((prev) => prev.filter((el) => el.id != item.id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.time) return toast.error("The 'time' field cannot be empty.");
    if (!/^([01]\d|2[0-3]):([0-5]\d)$/.test(formData.time))
      return alert("Please enter a valid time in the format HH:MM.");

    const courseObj = course.find((c) => c.id == formData.course);
    const weekDayObj = weekDays.find((w) => w.id == formData.weekDay);

    setClasses((prev) => {
      const nextId =
        prev.length > 0 ? Math.max(...prev.map((c) => c.id)) + 1 : 1;
      const baseData = {
        id: selectedItem ? selectedItem.id : nextId,
        course: courseObj?.name || "Not found",
        courseId: formData.course,
        weekDayId: formData.weekDay,
        icon: courseObj?.icon || "",
        weekDay: weekDayObj?.name || "Not found",
        time: formData.time,
        students: selectedStudents,
        professors: selectedProfessors,
      };
      return selectedItem
        ? prev.map((c) => (c.id === selectedItem.id ? baseData : c))
        : [...prev, baseData];
    });

    toast.success("Class added successfully!");
    setSelectedButtonManageClasses(1);
  };

  useEffect(() => {
    if (selectedItem) {
      setSelectedStudents(selectedItem.students);
      setSelectedProfessors(selectedItem.professors);
      setFormData({
        course: selectedItem.courseId || "",
        time: selectedItem.time || "",
        weekDay: selectedItem.weekDayId || "",
      });
    }
  }, [selectedItem]);

  return (
    <div className="relative">
      <FormClass formData={formData} handleChange={handleChange} />
      <SendButton onClick={handleSubmit} />
      <ModeSelector mode={mode} setMode={setMode} />
      <SearchAddPerson
        mode={mode}
        dataList={mode === "student" ? data?.student : data?.professor}
        onAddPerson={handleAddPerson}
      />
      <SelectedPerson
        students={selectedStudents}
        professors={selectedProfessors}
        onRemovePerson={handleRemovePerson}
      />
    </div>
  );
}
