import React from 'react';

const PlayDetails = ({play}) => {
    return(
        <div>
        <h2>{play.name}</h2>
        <h4>Written by: {play.author}</h4>
        <p>{play.description}</p>
        </div>
    )

}

export default PlayDetails