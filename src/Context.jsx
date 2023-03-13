import React, { useContext, useState, useEffect} from "react"
import { createContext } from "react";


const Context = createContext();

function ContextProvider({children}){

    const [pictures, setPictures] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [ordering,setOrdering] = useState(false);

    function addToCart(picture){

            setCartItems(prev=>{
                const newCartList = [...prev];
                newCartList.push(picture);
                return newCartList;
            });
    }

    function removeFromCart(picture){
        setCartItems(prev=> prev.filter(item=> item.id !== picture.id));
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
    ));}

    function placeOrder(){
        if(cartItems.length > 0){
            setCartItems([]);
            setOrdering(true);
            setTimeout(()=>{setOrdering(false)},3000);
            console.log("Ordering")

        }else{
            alert("Please Select Some Pictures!")
        }
    }


useEffect(
  ()=>{
    fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
    .then(data=>data.json())
    .then(data=>setPictures(data))
  },[]
);



    return (
        <Context.Provider value={{pictures,toggleFavorite,addToCart,cartItems,removeFromCart,placeOrder,ordering}}>
            {children}
        </Context.Provider>
    );
}

export{ContextProvider, Context}