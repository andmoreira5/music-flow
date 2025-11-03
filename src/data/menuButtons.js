import { FaChalkboardTeacher, FaMusic, FaUserGraduate } from "react-icons/fa";

export const menuButton = {
  registration: [
    {
      label: "Students",
      icon: FaUserGraduate,
      color: "bg-sky-800",
      property: "student",
      navigation: "/manageRegistrations",
      title: "MANAGE STUDENTS",
    },
    {
      label: "Professors",
      icon: FaChalkboardTeacher,
      color: "bg-green-800",
      property: "professor",
      navigation: "/manageRegistrations",
      title: "MANAGE PROFESSORS",
    },
  ],
  classes: [
    {
      label: "Classes",
      icon: FaMusic,
      color: "bg-red-900",
      navigation: "/manageClasses",
      title: "MANAGE CLASSES",
    },
  ],
};
