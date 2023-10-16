import React, {useState} from "react";

import Register from "./Components/Register/Register.js";
import Login from "./Components/Login/Login.js"

function UnauthenticatedApp(){
    const [isRegistered, setIsRegistered] = useState(true);

    function switchMode(){
        setIsRegistered((prevIsRegistered) => !prevIsRegistered);
    };
    
    return(
        <div>
            <h1 className='header'>Welcome to The Playground.</h1>
            <h2>Please Login or Sign Up</h2>
            {isRegistered ? (
                <Register isRegistered={isRegistered} switchMode={switchMode} />
            ) : (
                <Login isRegistered={isRegistered} switchMode={switchMode} />
            )}
        </div>
    )
}

export default UnauthenticatedApp;