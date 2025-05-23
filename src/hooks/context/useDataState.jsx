import { useState } from "react";

export default function useDataState() {
  const [userData, setUserData] = useState();
  return { userData, setUserData };
}
