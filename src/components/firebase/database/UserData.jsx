import React from "react";
import { doc,setDoc } from "firebase/firestore";

 async function setUserData(db,email){
    await setDoc(doc(db,"users",email),{
        email: email,
        favorited: [],
        purchased: [],
        cart:[],
        soul: false,

    });
}

export { setUserData }