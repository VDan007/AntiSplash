import React from "react";

function CartItem(props){
    return (
        <div className="cart-item">
            <img src={props.picture.url} width="130px" alt="" />
            <p>$5.99</p>
        </div>
    );
}


export  { CartItem };