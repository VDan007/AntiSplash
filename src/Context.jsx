import React, { useState, useEffect} from "react";
import { createContext } from "react";
import { initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set,push } from 'firebase/database';





const firebaseConfig = {
    apiKey: "AIzaSyC2JR_jafKyxpbpJ3_d_YeyTsZoPt19ny4",
    authDomain: "scrimbaecommerce.firebaseapp.com",
    databaseURL: "https://scrimbaecommerce-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "scrimbaecommerce",
    storageBucket: "scrimbaecommerce.appspot.com",
    messagingSenderId: "89224375686",
    appId: "1:89224375686:web:961ad359ae3315f7cbd007"
  };

const app = initializeApp(firebaseConfig);  
const auth = getAuth(app);
const db = getDatabase(app);
const Context = createContext();  

function ContextProvider({children}){
    const [showPopUp,setShowPopUp] =useState(true);
    const [search, setSearch] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [photoPages,setPhotoPages] = useState(1);
    const [pictures, setPictures] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [ordering,setOrdering] = useState(false);
    const [ authUser, setAuthUser] = useState(null);
    const [pictureOpen,setPictureOpen] = useState({opened: false,
                                                   picture: {},});
    document.body.style.overflowY = pictureOpen.opened ? 'hidden' : 'auto';

    



     function setUserData(email,uid){
        set(ref(db,'users/' + uid),{
            email: email,
            likedPictures :[],
            purchases: [],
            inCart:[],

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
            if(search){

                fetch(`https://api.unsplash.com/search/photos?page=${photoPages}&query=${searchTerm}&client_id=aDoVNz0oe4OyiTv3FvuO3tOGZye5kVhJuZEUwcmsj7A`)
                .then(data=>data.json())
                 .then(data=>{
                    const newArray = [...pictures];
                    data.results.forEach(item=>newArray.push(item));
                    setPictures(newArray)
                //console.log(data);
                });

            

            }else{

                fetch(`https://api.unsplash.com/photos?page=${photoPages}&client_id=aDoVNz0oe4OyiTv3FvuO3tOGZye5kVhJuZEUwcmsj7A`)
                .then(data=>data.json())
                .then(data=>{
                    const newArray = [...pictures];
                    data.forEach(item=>newArray.push(item));
                    setPictures(newArray)});

            }
        },[photoPages,search]);
       
    


    return (
        <Context.Provider value={{pictures,
                                  setPictures,
                                  toggleFavorite,
                                  addToCart,
                                  cartItems,
                                  removeFromCart,
                                  placeOrder,
                                  ordering,
                                  db,
                                  auth,
                                  authUser,
                                  setAuthUser,
                                  setUserData,
                                  pictureOpen,
                                  setPictureOpen,
                                  setPhotoPages,
                                  photoPages,
                                  search,
                                  setSearch,
                                  setSearchTerm,
                                  showPopUp,
                                  setShowPopUp,
                                  }}>
            {children}
        </Context.Provider>
    );
}

export{ContextProvider, Context}