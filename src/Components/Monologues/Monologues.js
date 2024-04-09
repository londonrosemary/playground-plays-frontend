import React from "react";
import MonologueCard from "./MonologueCard";
import { useState, useEffect } from "react";
import axios from "axios";

const Monologues = ({setMonologue}) => {
    const baseURL = "http://localhost:1337/api/monologues"
    const token = localStorage.getItem("authToken")
    const headers = { 'Authorization': `Bearer ${token}` }; // auth header with bearer token

    const [monologues, setMonologues] = useState([])
    const [currentMonologue, setCurrentMonologue] = useState([])

    useEffect(() => {
        axios.get(
            baseURL,
            {headers}
            )
        .then((response)=>{
            // console.log(response.data.data)
            setMonologues(response.data.data)
            // console.log(monologues)
        })
    },[])
    
    const monologueArr = monologues.map((monologue) => {
        return(<MonologueCard key={monologue.id} monologue={monologue} setCurrentMonologue={setCurrentMonologue}/> )
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