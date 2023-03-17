import React from "react";

function Hero(){
    return(
        <div className="heroDiv">
            <div className="heroTextDiv">
                <h1>Antisplash</h1>
                <p>The internet's source for visuals.</p>
                <p>Powered by creators everywhere.</p>
                <span className="inputSpan">
                    <img className="inputIcon" src="/search-line.svg" alt="" />
                    <input type="text"
                        placeholder="Search high-resolution images" 

                    />
                </span>
            </div>
        </div>
    );
}


export { Hero };