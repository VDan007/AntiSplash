import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useContext, useState} from "react";
import { Context } from "../../Context";

function AuthDetails(){
    const { auth } = useContext(Context);
    const [ authUser, setAuthUser] = useState(null);

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setAuthUser(user)
            }else{
                setAuthUser(null);
            }
        });
    },[]);

    return(
        <div>{authUser ? 
            <p>Signed In</p> 
            :
            <p>Signed Out</p>}
        </div>
    );
}

export { AuthDetails }