import React from "react";
import { useState, useContext } from "react";
import { picturesContext } from "../App";


function Photos(props) {

    function PhotoContainer(props){
        const [hovered,setHovered] = useState(false);
        const toggleFav = useContext(picturesContext);
        return(
            <div className="imgContainer"
                 onMouseEnter={()=>setHovered(true)} 
                 onMouseLeave={()=>setHovered(false)}
            >
                    {props.data.isFavorite && <img onClick={()=>toggleFav(props.data.id)} src="public/heartRed.svg" className="heartImg" alt="" />}
                    {!props.data.isFavorite && hovered && <img onClick={()=>toggleFav(props.data.id)} src="public/heartWhite.svg" className="heartImg" alt="" />}
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