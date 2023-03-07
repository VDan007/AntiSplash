import React from "react";
import { useEffect} from "react";

import { createContext } from "react";



function ContextProvider(){}

// useEffect(
//     ()=>{
//         fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
//         .then(resp=>resp.json())
//         .then(data=>console.log(data))
//     },[]
// );

export const loggedIn = createContext('');



