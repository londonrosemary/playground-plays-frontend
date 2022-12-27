import React from "react";

const PlayCard = ({play}) => {
    const viewDetails =() =>{
        console.log("viewDetails button clicked")
    }

    return(
        <div className="PlayCard-container">
            <h3>{play.name}</h3>
            <p>Playwright: {play.author}</p>
            <p>Genre: {play.genre}</p>
            <button onClick={viewDetails}>view details</button>
        </div>
    )
}

export default PlayCard;