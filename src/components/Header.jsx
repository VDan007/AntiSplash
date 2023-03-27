import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context";
import { AuthDetails } from "./firebase/auth/AuthDetails";





function Header() {
    const {cartItems} = useContext(Context);
    
    return (
        <header className="header">
            <div className="headerUpper">
                <Link to="/">
                <img src="/unsplash-fill.svg" className="logoImg" alt="" />
                </Link>
                <div className="headerRightDiv">
                    <AuthDetails/>
                    <Link to="/cart">
                        <img src= {cartItems.length == 0 ? "/shoppingCart.svg" : "/shoppingCartFilled.svg"} alt="" />
                    </Link>
                </div>
            </div>
            <div className="headerCatergorySearchBar">
                <div className="headerCatergorySearchBarFix">
                    <p>Editorial</p>
                    <p>Following</p>
                </div>
                
                <div></div>
            </div>
        </header>
    )
}

export default Header