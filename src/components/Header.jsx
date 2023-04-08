import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context";
import { AuthDetails } from "./firebase/auth/AuthDetails";
import { ImageSearchForm } from "./ImageSearchForm";





function Header() {
    const {cartItems,setSearch,setSearchTerm,setPictures} = useContext(Context);
    const [carouselPosition,setCarouselPosition] = useState(0);
    const caruoselRef = useRef(null);
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

   
    const carouselElementNames = [
                            "Wallpapers",
                            "3D Renders",
                            "Travel",
                            "Nature",
                            "Street Photography",
                            "Experimental",
                            "Textures & Patterns",
                            "Animals",
                            "Architectures & Interiors",
                            "Fashion & Beauty",
                            "Film",
                            "Food & Drink",
                            "People",
                            "Spirituality",
                            "Business & Work",
                            "Athletics",
                            "Health & Wellness",
                            "Current Events",
                            "Arts & Culture",
    ];

    const carousElementsToRender = carouselElementNames.map(
        (item)=> {
            const queryTerm = item
            .trim()
            .replace(' ','+');
        return(<li
                 onClick={ ()=>{setPictures([]);  
                                setSearch(queryTerm); 
                                setSearchTerm(queryTerm)}}
                 key = {item}
               >{item}</li>)}
    );


    function scrollCarousel(){
        const totalScrolls = caruoselRef.current.scrollWidth / caruoselRef.current.clientWidth;
        return Math.ceil(totalScrolls)
    }
    
    
    return (
        <header className="header">
            <div className="headerUpper">
                <Link onClick={()=>{setPictures([]);setSearch('')}} to="/">
                <img src="/unsplash-fill.svg" className="logoImg" alt="" />
                </Link>
                <div className="headerUpperInputContainer">
                    <ImageSearchForm/>
                </div>
                <div className="headerRightDiv">
                    <AuthDetails/>
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
                            {carousElementsToRender}
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