import React from "react";
import { useState, useContext } from "react";
import { Context } from "../Context";

 function Photo(props){
        const [hovered,setHovered] = useState(false);
        const {toggleFavorite, addToCart,cartItems,removeFromCart} = useContext(Context);
        const inCart = cartItems.some(item=> item.id === props.data.id);
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
                    {!inCart && hovered && <img src="/plusWhite.svg" 
                                     onClick={()=>addToCart(props.data)}
                                     className="plusImg" 
                                     alt="" />}
                    {inCart && <img src="/shoppingCart.svg" 
                                      onClick={()=>removeFromCart(props.data)}
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