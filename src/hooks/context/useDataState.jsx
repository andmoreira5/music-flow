import { useState } from "react";

export default function useDataState() {
  const [userData, setUserData] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [data, setData] = useState();
  const [columns, setColumns] = useState();
  const [tableSelected, setTableSelected] = useState("");
  const [selectedItem, setSelectedItem] = useState();
  const [classes, setClasses] = useState([]);

  return {
    userData,
    setUserData,
    isLoggedIn,
    setIsLoggedIn,
    data,
    setData,
    columns,
    setColumns,
    tableSelected,
    setTableSelected,
    selectedItem,
    setSelectedItem,
    classes,
    setClasses,
  };
}
