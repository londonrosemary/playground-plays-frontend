import React from "react";
import PlayCard from "./PlayCard";
import { useState, useEffect } from "react";
import axios from "axios";

const Plays = ({setPlay}) => {
    const baseURL = "http://localhost:1337/api/plays"
    const headers = { 'Authorization': 'Bearer my-token' }; // auth header with bearer token

    const [plays, setPlays] = useState([])

    useEffect(() => {
        axios.get(
            baseURL,
            {headers}
            )
        .then((response)=>{
            // setPlays(response.data)
            console.log(response.data)
        })
    },[])
    
    const playArr = plays.map((play) => {
        return(<PlayCard key={play.id} play={play} setPlay={setPlay}/> )
    })

    return(
        <div>
            <h3>Our Play Library</h3>
            <p>At the Playground, we want to ensure you have access to quality plays to pull material from. Check out some plays below and request a copy to be sent a pdf of the script.</p>
            <ul>{playArr}</ul>
        </div>
        
    )
}

export default Plays;