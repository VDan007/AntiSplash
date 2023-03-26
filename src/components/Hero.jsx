import React from "react";
import { useEffect, useState, useContext, useRef } from 'react';
import { Context } from '../Context';


function Hero(){

    const [bg,setBg] = useState("");
    const [searchInput,setSearchInput] = useState('');
    const { setSearchTerm,setSearch } = useContext(Context);
    const inputRef = useRef(null);
    useEffect(
        ()=>{
            
                fetch("https://api.unsplash.com/photos/random?client_id=aDoVNz0oe4OyiTv3FvuO3tOGZye5kVhJuZEUwcmsj7A")
                .then(data=>data.json())
                .then(data=>setBg(data.urls.regular))

               


        },[]
    );

    function search(e){
       e.preventDefault();
       const queryTerm = searchInput
                            .trim()
                            .replace(' ','+');
        
       setSearchTerm(queryTerm);                     
       setSearch(true);
       
      
    }

    return(
        <div className="heroDiv" style={{backgroundImage: `url(${bg})`}}>
            <div className="heroTextDiv">
                <h1>Antisplash</h1>
                <p>The internet's source for visuals.</p>
                <p>Powered by creators everywhere.</p>
                <form onSubmit={search}>
                    <span className="inputSpan">
                        <img className="inputIcon" src="/search-line.svg" alt="" />
                            <input type="text" 
                                   ref={inputRef}
                                   placeholder="Search high-resolution images" 
                                   value = {searchInput}
                                   onChange = {e=> setSearchInput(e.target.value) }

                            />
                    </span>
                </form>
            </div>
        </div>
    );
}


export { Hero };