import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Login from "../pages/Login.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import Home from "../pages/Home.jsx";

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/login"} element={<Login />} />

        <Route
          path={"/home"}
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to={"/login"} />} />
      </Routes>
    </BrowserRouter>
  );
}
