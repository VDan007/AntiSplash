import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context";
import { AuthDetails } from "./firebase/auth/AuthDetails";





function Header() {
    const {cartItems} = useContext(Context);
    console.log(cartItems);
    return (
        <header>
            <Link to="/">
            <img src="/unsplash-fill.svg" className="logoImg" alt="" />
            </Link>

            <Link to="/cart">
                <img src= {cartItems.length == 0 ? "/shoppingCart.svg" : "/shoppingCartFilled.svg"} alt="" />
            </Link>
            <AuthDetails/>
        </header>
    )
}

export default Header