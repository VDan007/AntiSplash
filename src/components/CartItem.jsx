import React from "react";
import { useContext } from "react";
import { Context } from "../Context";

function CartItem(props){
    const { removeFromCart } = useContext(Context);
    return (
        <div className="cart-item">
            <img src="/trash.svg"
                 alt=""
                 onClick={()=>{removeFromCart(props.picture)}}
                 
            />
            <img src={props.picture.urls.small} width="130px" alt="" />
            <p>$5.99</p>
        </div>
    );
}


export  { CartItem };