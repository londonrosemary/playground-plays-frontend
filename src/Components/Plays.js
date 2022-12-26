import React from "react";
import PlayCard from "./PlayCard";
import { useState, useEffect } from "react";
import axios from "axios";

const Plays = () => {
    const [plays, setPlays] = useState([])
    const baseURL = "http://localhost:3001/plays"

    useEffect(() => {
        axios.get(baseURL)
        .then((response)=>{
            setPlays(response.data)
        })
    },[])
    
    const playArr = plays.map((play) => {
        return(<PlayCard key={play.id} play={play} /> )
    })

    return(
        <ul>{playArr}</ul>
    )
}

export default Plays;