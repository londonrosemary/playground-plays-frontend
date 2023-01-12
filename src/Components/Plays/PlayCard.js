import React from "react";
import {useNavigate} from 'react-router-dom';

import PlayDetails from "./PlayDetails";

const PlayCard = ({play, setPlay}) => {
    let navigate = useNavigate();

    const viewDetails =() =>{
        setPlay(play);
        navigate(`/plays/${play.id}`)
    }

    return(
        <div className="PlayCard-container">
            <h3>{play.name}</h3>
            <p>Playwright: {play.author}</p>
            <p>Genre: {play.genre}</p>
            <button onClick={viewDetails}>View Details</button>
            <button>Request a copy</button>
        </div>
    )
}

export default PlayCard;