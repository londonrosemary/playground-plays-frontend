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
       <Route
          path="/"
          element={getToken() ? <Calendar/> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
      </Routes>
    );
  };
  
  export default AppRoutes;