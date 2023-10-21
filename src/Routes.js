import React from "react";
import { Routes, Route, Navigate } from "react-router";
import { getToken } from "./helpers";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import AuthenticatedApp from "./AuthenticatedApp"
import Calendar from "./Components/Calendar/Calendar";

const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={getToken() ? <Calendar/> : <Navigate to="/login" />}
        />
      </Routes>
    );
  };
  
  export default AppRoutes;