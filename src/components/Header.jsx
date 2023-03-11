import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";





function Header() {
    

    return (
        <header>
            <Link to="/">
            <h2>Pic Some</h2>
            </Link>
            <Link to="/cart">
                Cart
            </Link>
            
        </header>
    )
}

export default Header