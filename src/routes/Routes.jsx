import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Login from "../pages/Login.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import Home from "../pages/Home.jsx";
import ManageRegistrations from "../pages/ManageRegistrations.jsx";
import ManageClasses from "../pages/ManageClasses.jsx";

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

        <Route
          path={"/manageRegistrations"}
          element={
            <ProtectedRoute>
              <ManageRegistrations />
            </ProtectedRoute>
          }
        />
        <Route
          path={"/manageClasses"}
          element={
            <ProtectedRoute>
              <ManageClasses />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to={"/login"} />} />
      </Routes>
    </BrowserRouter>
  );
}
