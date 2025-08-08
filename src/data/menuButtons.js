import { FaChalkboardTeacher, FaMusic, FaUserGraduate } from "react-icons/fa";

export const menuButton = {
  registration: [
    {
      label: "Alunos",
      icon: FaUserGraduate,
      color: "bg-sky-800",
      property: "student",
      navigation: "/manageRegistrations",
      title: "GERENCIAR ALUNOS",
    },
    {
      label: "Professores",
      icon: FaChalkboardTeacher,
      color: "bg-green-800",
      property: "professor",
      navigation: "/manageRegistrations",
      title: "GERENCIAR PROFESSORES",
    },
  ],
  classes: [
    {
      label: "Turmas",
      icon: FaMusic,
      color: "bg-red-900",
      navigation: "/manageClasses",
      title: "GERENCIAR TURMAS",
    },
  ],
};
