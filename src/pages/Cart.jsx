import React from "react"
import {Link} from "react-router-dom"
import { useContext } from "react";

function Cart() {

    return (
        <picturesContext.Provider value={cartItems}>
            <main className="cart-page">
                <h1>Check out</h1>
                <Link to="/">
                    Home
                </Link>
            </main>
        </picturesContext.Provider>
    )
}

export default Cart