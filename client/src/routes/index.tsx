import { Route, Routes } from "react-router-dom";
import Register from "../pages/register";
import { Login } from "../pages/login";
import { ProfilePage } from "../pages/profile";

export const AllRoutes = () => {
    return (
      <Routes>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    );
  };
  