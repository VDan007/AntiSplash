import React, { useState, useEffect} from "react";
import { createContext } from "react";
import { initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set,update,get,push, onValue } from 'firebase/database';





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
    const [likedPictures,setLikedPictures] = useState([]);
    console.log(likedPictures);
    const [uid,setUid] = useState('');
    console.log(uid);
    const [showPopUp,setShowPopUp] =useState(true);
    const [search, setSearch] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [photoPages,setPhotoPages] = useState(1);
    const [pictures, setPictures] = useState([]);
    const [ authUser, setAuthUser] = useState(null);
    const [pictureOpen,setPictureOpen] = useState({opened: false,
                                                   picture: {},});
    document.body.style.overflowY = pictureOpen.opened ? 'hidden' : 'auto';

  
    


     function setUserData(email,uid){
        set(ref(db,'users/' + uid),{
            email: email,
       });  
    }

    function toggleFavorite(id){

        if (auth.currentUser){
            push(ref(db,`users/${uid}/liked/`),{
                id
            });
        }else{
            alert('please log in');
        }
    }

 
    useEffect(
        ()=>{
            
                return onValue(ref(db,'users/' + uid + '/liked'),(s)=>{
                  if(s.exists()){
                    const data = Object.entries(s.val());
                    setLikedPictures(data)
                  }else{
                      setLikedPictures([]);
                      console.log('naa');
                  }
                  });

            
    
        },[uid]
      );
    
    
        
  
   

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
                    
                    data.forEach(item=>{
                        if(newArray.every(pic=>pic.alt_description !== item.alt_description)){
                        newArray.push(item)}
                    });
                    setPictures(newArray)});

            }
        },[photoPages,search]);



       
    


    return (
        <Context.Provider value={{pictures,
                                  setPictures,
                                  toggleFavorite,
                                  likedPictures,
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
                                  uid,
                                  setUid,
                                  }}>
            {children}
        </Context.Provider>
    );
}

export{ContextProvider, Context}