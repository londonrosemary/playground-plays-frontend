import React from "react";

const PlayCard = ({play}) => {

    return(
        <div className="PlayCard-container">
            <h3>{play.name}</h3>
            <p>Summary</p>
        </div>
    )
}

export default PlayCard;