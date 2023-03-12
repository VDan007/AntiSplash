import React from "react"
import {Link} from "react-router-dom"
import { useContext } from "react";
import { Context,ContextProvider} from "../Context"
import { Photo } from "../components/Photo";

function Cart() {

    const {cartItems} = useContext(Context);
    const imagesToRenderInCart = cartItems.map(
      picture=>  <Photo data={picture}/>
    );

    return (
        
            <main className="cart-page">
                <h1>Check out</h1>
                <Link to="/">
                    Home
                </Link>
                {imagesToRenderInCart}
            </main>
        
        
    )
}

export default Cart