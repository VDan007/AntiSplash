import React from "react"
import {Link} from "react-router-dom"
import { useContext, useState } from "react";
import { Context} from "../Context"
import { Photo } from "../components/Photo";
import { CartItem } from "../components/CartItem";

function Cart() {
    
    const {cartItems, placeOrder,ordering} = useContext(Context);
    const imagesToRenderInCart = cartItems.map(
      picture=>  <CartItem 
                    key={picture.id} 
                    picture={picture}
                />
    );

    return (
        
            <main className="cart-page">
                <h1>Check out</h1>
                <Link to="/">
                    Home
                </Link>
                {imagesToRenderInCart}

               {!ordering && cartItems.length > 0 && 
                 <p className="total-cost">
                    Total: {(5.99 * cartItems.length).toLocaleString("en-US", {style: "currency", currency: "USD"})}
                 </p>}

                 {ordering && <p>Placing Order</p>}

                <div className="order-button">
                    <button 
                        className="order-button"
                        onClick={()=>placeOrder()}
                    
                    >Place Order</button>
                </div>
            </main>
        
        
    )
}

export default Cart