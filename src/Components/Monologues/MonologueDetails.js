import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import axios from "axios";
import { API} from "../../constant";
// import Popup from 'reactjs-popup';

const PlayDetails = () => {
    const { monologueId } = useParams();
    const baseURL = API + `/monologues/${monologueId}`
    const token = localStorage.getItem("authToken")
    const headers = { 'Authorization': `Bearer ${token}` }; // auth header with bearer token
    const [currentMonologue, setCurrentMonologe] = useState({})

    useEffect(() => {
        axios.get(
            baseURL,
            {headers}
            )
        .then((response)=>{
            // console.log(response.data.data)
            setCurrentMonologe(response.data.data.attributes)
            console.log(currentMonologue)
        })
      }, [monologueId]);

    return(

        <div>
        {
            monologueId ? (
                <>
                <div className='monologue_details'>
                    {/* <h2>{currentMonologue.name}</h2> */}
                    <h4>Written by: {currentMonologue.author}</h4>
                    <p>{currentMonologue.gender}</p>
                    <p>{currentMonologue.content}</p>
                    {/* <p>Time period: {currentPlay.time_period}</p> */}
                    {/* <Popup trigger={<button> View Suggested Monologues</button>} position="right center">
                        add monologue array here
                    </Popup> */}
                </div>
                </>
            ) : (
                <p> No working </p>
            )
        }
                    
        </div>
    )

}

export default PlayDetails