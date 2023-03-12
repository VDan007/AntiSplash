import React, { useContext, useState, useEffect} from "react"
import { createContext } from "react";


const Context = createContext();

function ContextProvider({children}){

    const [pictures, setPictures] = useState([]);
    const [cartItems, setCartItems] = useState([]);


    function addToCart(picture){
        setCartItems(prev=>{
            const newCartList = [...prev];
            newCartList.push(picture);
            return newCartList;
        })
    }

    function toggleFavorite(id){
    setPictures(prev=>prev.map(
        picture=>{
        if(picture.id !== id){
            return picture;
        }else{
            return {...picture,
                    isFavorite : !picture.isFavorite}
        }
        }
    ));
  
}


useEffect(
  ()=>{
    fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
    .then(data=>data.json())
    .then(data=>setPictures(data))
  },[]
);



    return (
        <Context.Provider value={{pictures,toggleFavorite,addToCart,cartItems}}>
            {children}
        </Context.Provider>
    );
}

export{ContextProvider, Context}