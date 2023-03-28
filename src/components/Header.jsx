import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context";
import { AuthDetails } from "./firebase/auth/AuthDetails";





function Header() {
    const {cartItems} = useContext(Context);
    const [carouselPosition,setCarouselPosition] = useState(0);
    const caruoselRef = useRef(null);
    const carouselLast = useRef(null);
    const [rightArrowClickCounter, setRightArrowClickCoounter] = useState(0);
    
   

    function resetCarousel(){
        setCarouselPosition(0);
        setRightArrowClickCoounter(0);
    }
    useEffect(
        ()=>{



            window.addEventListener('resize',resetCarousel);
           
            return () => window.removeEventListener('resize',resetCarousel);
        },[]
    );

    function scrollCarousel(){
        const totalScrolls = caruoselRef.current.scrollWidth / caruoselRef.current.clientWidth;
        return Math.ceil(totalScrolls)
    }
    
    
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
                <div className='arrowDiv aDl'>
                    {carouselPosition < 0 && <img src="/arrow-left-s-line.svg" 
                         alt=""
                         onClick={()=>{setCarouselPosition(prev=>{
                            if(prev+caruoselRef.current.scrollWidth/7 > 0){
                                return 0;
                            }else{ 
                                return prev+ caruoselRef.current.scrollWidth/scrollCarousel() }})
                                setRightArrowClickCoounter(prev=>prev-1)}}
                    />}
                </div>
                 <div className='headerCatergorySearchBarCarusel'>
                        <ul ref={caruoselRef} style={{transform: `translate(${carouselPosition}px)`}}>
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
                            <li ref={carouselLast}>Arts & Culture</li>
                        </ul>
                </div>
               {(rightArrowClickCounter == 0 || rightArrowClickCounter +1 < scrollCarousel()) && <div className='arrowDiv aDr'>
                <img src="/arrow-right-s-line.svg" 
                     alt=""
                     onClick={()=>{setCarouselPosition(prev=>prev-caruoselRef.current.scrollWidth/scrollCarousel());
                        setRightArrowClickCoounter(prev=>prev+1);}
                    }
                />
                </div>}
               
            </div>
        </header>
    )
}

export default Header