import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import './App.css';

import NavBar from './Components/NavBar';
import Plays from './Components/Plays/Plays'

function App() {
  return (
    <div>
      {/* Anything that will live on all pages will need to go outside of the routes */}
      <NavBar />
      {/* Need the Routes indicator inside main App to allow all routes to work */}
      <Routes>
        {/* Route requires a path and an element.
              Path is for the URL
              Element is for the component being rendered */}
          <Route exact path='/plays' element={<Plays />}/>
      </Routes> 
    </div>
      

  );
}

export default App;
