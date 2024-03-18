import React from "react";
import { Routes, Route, Navigate } from "react-router";
import { getToken } from "./helpers";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import AuthenticatedApp from "./AuthenticatedApp"
import Calendar from "./Components/Calendar/Calendar";
import Plays from "./Components/Plays/Plays";

const AppRoutes = () => {
    return (
      <Routes>
       <Route
          path="/"
          element={getToken() ? <Navigate to="/home" /> : <Navigate to="/login" />}
        />
        <Route path="/home" element={<Calendar/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/plays" element={<Plays />} />  
      </Routes>
    );
  };
  
  export default AppRoutes;