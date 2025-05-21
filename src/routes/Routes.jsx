import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Login from "../pages/Login.jsx";

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/login"} element={<Login />} />

        <Route path="*" element={<Navigate to={"/login"} />} />
      </Routes>
    </BrowserRouter>
  );
}
