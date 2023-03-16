import React, { useContext, useState, useEffect} from "react"
import { createContext } from "react";
import { initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";




const firebaseConfig = {
    apiKey: "AIzaSyC2JR_jafKyxpbpJ3_d_YeyTsZoPt19ny4",
    authDomain: "scrimbaecommerce.firebaseapp.com",
    projectId: "scrimbaecommerce",
    storageBucket: "scrimbaecommerce.appspot.com",
    messagingSenderId: "89224375686",
    appId: "1:89224375686:web:961ad359ae3315f7cbd007"
  };

const app = initializeApp(firebaseConfig);  
const auth = getAuth(app);

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
            
            setOrdering(true);
            setTimeout(()=>{setOrdering(false),setCartItems([]);},3000);
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
        <Context.Provider value={{pictures,
                                  toggleFavorite,
                                  addToCart,
                                  cartItems,
                                  removeFromCart,
                                  placeOrder,
                                  ordering,
                                  auth,
                                  }}>
            {children}
        </Context.Provider>
    );
}

export{ContextProvider, Context}