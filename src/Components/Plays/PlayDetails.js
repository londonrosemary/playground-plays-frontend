import React from 'react';
import {useParams} from 'react-router-dom';
// import { useState } from 'react';

const PlayDetails = (play) => {
    const params = useParams()
    console.log(params)
    // console.log(play)

    return(
        <div>
        {/* <h2>{play.name}</h2>
        <h4>Written by: {play.author}</h4>
        <p>{play.synopsis}</p>
        <p>Time period: {play.time_period}</p>
        <p>View Suggested Monologues</p> */}
        </div>
    )

}

export default PlayDetails