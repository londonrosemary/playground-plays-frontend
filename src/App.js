import React from 'react';
import { useState } from 'react';

import AuthenticatedApp from "./AuthenticatedApp.js"
import UnauthenticatedApp from './UnauthenticatedApp';

import {
  Routes,
  Route,
} from "react-router-dom";

import './App.css';


function App() {
// did this work?
const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("user"))

if (isLoggedIn === false) {
  return(
    <Routes>
      <Route exact path="/" element={<UnauthenticatedApp />}/>
    </Routes>
  )}
else {
  return(
    <Route>
      <Route exact path="/" element={<AuthenticatedApp />}/>
    </Route>
  )}
}


export default App;
