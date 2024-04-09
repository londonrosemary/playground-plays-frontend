import React from "react";
import {useNavigate} from 'react-router-dom';

const MonologueCard = ({monologue, setMonologue}) => {
    let navigate = useNavigate();

    const viewDetails = () =>{
        // setMonologue(monologue);
        navigate(`/monologues/${monologue.id}`)
        // console.log({monologue})
    }

    return(
        <div className="MonologueCard-container">
            {/* <h3>{monologue.attributes.author}</h3> */}
            <p>Playwright: {monologue.attributes.author}</p>
            <p>Genre: {monologue.attributes.genre}</p>
            <p>Gender: {monologue.attributes.gender}</p>
            <button onClick={viewDetails}>View Details</button>
            <button>Request a copy</button>
        </div>
    )
}

export default MonologueCard;