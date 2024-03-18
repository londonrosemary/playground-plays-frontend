import React from "react";
import PlayCard from "./PlayCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { API} from "../../constant";

const Plays = ({setPlay}) => {
    const baseURL = API + "/plays"
    const token = localStorage.getItem("authToken")
    const headers = { 'Authorization': `Bearer ${token}` }; // auth header with bearer token

    const [allPlays, setPlays] = useState([])
    const [currentPlay, setcurrentPlay] = useState([])
    
    useEffect(() => {
        axios.get(
            baseURL,
            {headers}
            )
        .then((response)=>{
            console.log(response.data.data)
            setPlays(response.data.data)
            console.log(allPlays)
        })
    },[])
    
    const playArr = allPlays.map((play) => {
        return(<PlayCard key={play.attributes.id} play={play} setcurrentPlay={setcurrentPlay}/> )
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