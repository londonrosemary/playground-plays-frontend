import React, {useState} from "react";

import Register from "./Components/Register/Register.js";
import Login from "./Components/Login/Login.js"

function UnauthenticatedApp(){
    const [isSignedUp, setIsSignedUp] = useState(true);

    function switchMode(){
        setIsSignedUp((prevIsSignedUp) => !prevIsSignedUp);
    };
    
    return(
        <div>
            <h1 className='header'>Login</h1>
            {isSignedUp ? (
                <Register isSignedUp={isSignedUp} switchMode={switchMode} />
            ) : (
                <Login isSignedUp={isSignedUp} switchMode={switchMode} />
            )}
        </div>
    )
}

export default UnauthenticatedApp;