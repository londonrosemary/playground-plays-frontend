import React from "react";
import {useNavigate} from 'react-router-dom';

const MonologueCard = ({monologue, setMonologue}) => {
    let navigate = useNavigate();

    const viewDetails = () =>{
        setMonologue(monologue);
        navigate(`/monologues/${monologue.id}`)
    }

    return(
        <div className="MonologueCard-container">
            <h3>{monologue.name}</h3>
            {/* <p>Playwright: {monologue.author}</p> */}
            <p>Genre: {monologue.genre}</p>
            <p>Gender: {monologue.gender}</p>
            <button onClick={viewDetails}>View Details</button>
            <button>Request a copy</button>
        </div>
    )
}

export default MonologueCard;