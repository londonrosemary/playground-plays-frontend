import React from "react";
import {useNavigate, useState} from 'react-router-dom';

import PlayDetails from "./PlayDetails";

const PlayCard = ({play, setCurrentPlay}) => {
    let navigate = useNavigate();

    const viewDetails =() =>{
        // setCurrentPlay(play);
        navigate(`/plays/${play.id}`)
    }

    return(
        <div className="PlayCard-container">
            <h3>{play.attributes.name}</h3>
            <p>Playwright: {play.attributes.author}</p>
            <p>Genre: {play.attributes.genre}</p>
            <button onClick={viewDetails}>View Details</button>
            <button>Request a copy</button>
        </div>
    )
}

export default PlayCard;