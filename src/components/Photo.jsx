import React from "react";
import { useState, useContext } from "react";
import { Context } from "../Context";
import { scroll } from './ClickedImage';

 function Photo(props){
        const [hovered,setHovered] = useState(false);
        const {toggleFavorite,setPictureOpen} = useContext(Context);
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
                    

                    
                    <img src={props.data.urls.small}
                         alt=""
                         className="img001"
                         onClick={()=>{
                              setPictureOpen({
                                   opened: true,
                                   picture : props.data
                              });
                              scroll();
                         }}
                    />
            </div>
        );
    }

    export { Photo }