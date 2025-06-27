import { useState } from "react";

export default function useDataState() {
  const [userData, setUserData] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [data, setData] = useState();
  const [tableSelected, setTableSelected] = useState("");

  return {
    userData,
    setUserData,
    isLoggedIn,
    setIsLoggedIn,
    data,
    setData,
    tableSelected,
    setTableSelected,
  };
}
