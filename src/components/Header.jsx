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
                
                <div className='headerCatergorySearchBarCarusel'>
                    <div className='arrowDiv aDl'>sf</div>
                    <div className='arrowDiv aDr'>sdf</div>
                    <div className="ulContainer">
                        <ul>
                            <li>Wallpapers</li>
                            <li>3D Renders</li>
                            <li>Travel</li>
                            <li>Nature</li>
                            <li>Street Photography</li>
                            <li>Experimental</li>
                            <li>Textures & Patterns</li>
                            <li>Animals</li>
                            <li>Architectures & Interiors</li>
                            <li>Fashion & Beauty</li>
                            <li>Film</li>
                            <li>Food & Drink</li>
                            <li>People</li>
                            <li>Spirituality</li>
                            <li>Business & Work</li>
                            <li>Athletics</li>
                            <li>Health & Wellness</li>
                            <li>Current Events</li>
                            <li>Arts & Culture</li>
                        </ul>

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header