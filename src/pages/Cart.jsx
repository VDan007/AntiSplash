import React from "react"
import {Link} from "react-router-dom"
import { useContext } from "react";
import { Context} from "../Context"
import { Photo } from "../components/Photo";

function Cart() {

    const {cartItems} = useContext(Context);
    const imagesToRenderInCart = cartItems.map(
      picture=>  <p>2</p>
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