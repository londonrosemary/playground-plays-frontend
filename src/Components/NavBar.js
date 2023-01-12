import React, {useState} from "react";

const NavBar = () => {
    const [user, setUser] = useState({admin:false})
    if (user.admin === true) {
    return(
        <div className="NavBar-container">
            <h1>Playground Acting</h1>
            <a href="/plays">Plays</a>
            <a href="/monologues">Monologues</a>
            <a href="/">Home</a>
            <a href="/create">Create</a>
        </div>
        )
    }
    else {
        return(
            <div className="NavBar-container">
                <h1>Playground Acting</h1>
                <a href="/plays">Plays</a>
                <a href="/monologues">Monologues</a>
                <a href="/">Home</a>
            </div>
        )
    }

}

export default NavBar;