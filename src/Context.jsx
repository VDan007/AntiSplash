import React, { useState, useEffect} from "react";
import { createContext } from "react";
import { initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import { doc,setDoc,getFirestore } from "firebase/firestore";




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
const db = getFirestore(app);

const Context = createContext();  

function ContextProvider({children}){

    const [pictures, setPictures] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [ordering,setOrdering] = useState(false);
    const [ authUser, setAuthUser] = useState(null);
    const [pictureOpen,setPictureOpen] = useState({opened: false,
                                                   picture: {},});
    document.body.style.overflowY = pictureOpen.opened ? 'hidden' : 'auto';

    

    async function setUserData(email){
        await setDoc(doc(db,"users",email),{
            email: email,
            favorited: [],
            purchased: [],
            cart:[],
            soul: false,

        });
        
        
    }

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

        
        fetch("https://api.unsplash.com/photos?per_page=33&client_id=aDoVNz0oe4OyiTv3FvuO3tOGZye5kVhJuZEUwcmsj7A")
            .then(data=>data.json())
            .then(data=>{
                setPictures(data)
                console.log(data)})
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
                                  authUser,
                                  setAuthUser,
                                  setUserData,
                                  pictureOpen,
                                  setPictureOpen,
                                  }}>
            {children}
        </Context.Provider>
    );
}

export{ContextProvider, Context}