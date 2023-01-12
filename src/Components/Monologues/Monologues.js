import React from "react";
import MonologueCard from "./MonologueCard";
import { useState, useEffect } from "react";
import axios from "axios";

const Monologues = ({setMonologue}) => {
    const baseURL = "http://localhost:3001/monologues"

    const [monologues, setMonologues] = useState([])

    useEffect(() => {
        axios.get(baseURL)
        .then((response)=>{
            setMonologues(response.data)
        })
    },[])
    
    const monologueArr = monologues.map((monologue) => {
        return(<MonologueCard key={monologue.id} monologue={monologue} setMonologue={setMonologue}/> )
    })

    return(
        <div>
            <h3>Our Monologue Library</h3>
            <p>At the Playground, we want to ensure you have access to quality monologues to pull material from. Check out some monologues below and request a copy to be sent a pdf of the script.</p>
            <ul>{monologueArr}</ul>
        </div>
        
    )
}

export default Monologues;