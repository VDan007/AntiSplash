import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { picturesContext } from "../App";




function Header() {
    const recievedPicturesAsContext = useContext(picturesContext);

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