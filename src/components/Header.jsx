import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context";
import { AuthDetails } from "./firebase/auth/AuthDetails";





function Header() {
    const {cartItems} = useContext(Context);
    
    return (
        <header className="header">
            <Link to="/">
            <img src="/unsplash-fill.svg" className="logoImg" alt="" />
            </Link>
            <div className="headerRightDiv">
                <AuthDetails/>
                <Link to="/cart">
                    <img src= {cartItems.length == 0 ? "/shoppingCart.svg" : "/shoppingCartFilled.svg"} alt="" />
                </Link>
            </div>
        </header>
    )
}

export default Header