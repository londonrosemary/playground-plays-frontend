import React from "react";
import { Routes, Route, Navigate } from "react-router";
import { getToken } from "./helpers";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Calendar from "./Components/Calendar/Calendar";
import Plays from "./Components/Plays/Plays";
import PlayDetails from "./Components/Plays/PlayDetails";
import Monologues from "./Components/Monologues/Monologues";
import MonologueDetails from "./Components/Monologues/MonologueDetails"

const AppRoutes = () => {
    return (
      <Routes>
       <Route
          path="/"
          element={getToken() ? <Navigate to="/home" /> : <Navigate to="/login" />}
        />
        <Route path="/home" 
        element={getToken() ?<Calendar/> : <Navigate to="/login" />} />
        <Route
          path="/login"
          element={getToken() ? <Navigate to="/home" /> : <Login />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/plays" element={<Plays />} />  
        <Route path="monologues" element={<Monologues/>} />
        <Route path="/plays/:playId" element={<PlayDetails />} />
        <Route path="/monologues/:monologueId" element={<MonologueDetails/>} />
      </Routes>
    );
  };
  
  export default AppRoutes;