import React from "react";
import { useState, useContext } from "react";
import { Context } from "../Context";

 function Photo(props){
        const [hovered,setHovered] = useState(false);
        const {toggleFavorite} = useContext(Context);
        const {addToCart} = useContext(Context);
        return(
            <div className="imgContainer"
                 onMouseEnter={()=>setHovered(true)} 
                 onMouseLeave={()=>setHovered(false)}
            >
                    {props.data.isFavorite && <img onClick={()=>toggleFavorite(props.data.id)} 
                                                src="/heartRed.svg" 
                                                className="heartImg" 
                                                alt="" 
                                              />}
                    {!props.data.isFavorite && hovered && <img onClick={()=>toggleFavorite(props.data.id)} 
                                                            src="/heartWhite.svg" 
                                                            className="heartImg" 
                                                            alt="" 
                                                          />}
                    {hovered && <img src="/plusWhite.svg" 
                                     onClick={()=>addToCart(props.data)}
                                     className="plusImg" 
                                     alt="" />}
                    
                    <img src={props.data.url}
                         alt=""
                         className="img001"
                    />
            </div>
        );
    }

    export { Photo }