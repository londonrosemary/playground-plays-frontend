import React from "react";
import { useState } from "react";

import NavBar from './Components/NavBar';
import Plays from './Components/Plays/Plays'
import PlayDetails from './Components/Plays/PlayDetails';
import Monologues from './Components/Monologues/Monologues';
import MonologuesDetails from './Components/Monologues/MonologuesDetails';
import Calendar from './Components/Calendar/Calendar';

import {
    Routes,
    Route,
    useParams
  } from "react-router-dom";

const AuthenticatedApp = () => {
    const [play, setPlay] = useState({})
    const [monologue, setMonologue] = useState({})
    return(
        <div>
      {/* Anything that will live on all pages will need to go outside of the routes */}
      <NavBar />
      {/* Need the Routes indicator inside main App to allow all routes to work */}
      <Routes>
        {/* Route requires a path and an element. Path is for the URL. Element is for the component being rendered */}
          <Route exact path="/home" element={<Calendar/>} />
          <Route exact path='/plays' element={<Plays setPlay={setPlay} />}/>
          <Route path="/plays/:playId" element={<PlayDetails play={play}/>}/>
          <Route exact path={'/monologues'} element={<Monologues setMonologue={setMonologue}/>} />
          <Route exact path={`/monologues/${monologue.id}`} element={<MonologuesDetails monologue={monologue}/>} />
      </Routes>
        </div>
    )
}

export default AuthenticatedApp;