import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import axios from "axios";
import { API} from "../../constant";
// import { useState } from 'react';

const PlayDetails = () => {
    const { playId } = useParams();
    const baseURL = API + `/plays/${playId}`
    const token = localStorage.getItem("authToken")
    const headers = { 'Authorization': `Bearer ${token}` }; // auth header with bearer token
    const [currentPlay, setCurrentPlay] = useState({})

    useEffect(() => {
        axios.get(
            baseURL,
            {headers}
            )
        .then((response)=>{
            // console.log(response.data.data)
            setCurrentPlay(response.data.data.attributes)
            // console.log(currentPlay)
        })
      }, [playId]);

    return(

        <div>
        {
            playId ? (
                <>
                <h2>{currentPlay.name}</h2>
                <h4>Written by: {currentPlay.author}</h4>
                <p>{currentPlay.synopsis}</p>
                <p>Time period: {currentPlay.time_period}</p>
                <p>View Suggested Monologues</p>
                </>
            ) : (
                <p> No working </p>
            )
        }
                    
        </div>
    )

}

export default PlayDetails