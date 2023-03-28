import React from "react";
import { useEffect, useState } from 'react';
import { Context } from '../Context';
import { ImageSearchForm } from "./ImageSearchForm";


function Hero(){

    const [bg,setBg] = useState("");
    
    useEffect(
        ()=>{
                fetch("https://api.unsplash.com/photos/random?client_id=aDoVNz0oe4OyiTv3FvuO3tOGZye5kVhJuZEUwcmsj7A")
                .then(data=>data.json())
                .then(data=>setBg(data.urls.regular))
        },[]);

    return(
        <div className="heroDiv" style={{backgroundImage: `url(${bg})`}}>
            <div className="heroTextDiv">
                <h1>Antisplash</h1>
                <p>The internet's source for visuals.</p>
                <p>Powered by creators everywhere.</p>
                <ImageSearchForm/>
            </div>
        </div>
    );
}


export { Hero };