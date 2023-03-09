import React from "react";
import { useState } from "react";

function Photos(props) {

    function PhotoContainer(props){
        const [hovered,setHovered] = useState(false);
        
        return(
            <div className="imgContainer"
                 onMouseEnter={()=>setHovered(true)} 
                 onMouseLeave={()=>setHovered(false)}
            >
                    {hovered && <img src="public/heartWhite.svg" className="heartImg" alt="" />}
                    {hovered && <img src="public/plusWhite.svg" className="plusImg" alt="" />}
                    
                    <img src={props.data.url}
                         alt=""
                         className="img001"
                    />
                </div>
        );
    }

    const imagesToRender = props.pictures.map(
        item=>{
            return (
                <PhotoContainer
                    data={item}
                    key = {item.id}
                />
            );
        }
    );

    return (
        <main className="photos">
            {imagesToRender}
        </main>
    )
}

export  {Photos}