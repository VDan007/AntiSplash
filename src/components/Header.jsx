import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context";





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
            
        </header>
    )
}

export default Header