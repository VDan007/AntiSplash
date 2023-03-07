import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { picturesContext } from "../App";




function Header() {
    const recievedPicturesAsContext = useContext(picturesContext);
    console.log(recievedPicturesAsContext);
    return (
        <header>
            <Link to="/">
            <h2>Pic Some</h2>
            </Link>
            <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
            
        </header>
    )
}

export default Header