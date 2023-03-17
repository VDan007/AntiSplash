import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useContext, useState} from "react";
import { Context } from "../../Context";

function AuthDetails(){
    const { auth } = useContext(Context);
    const [ authUser, setAuthUser] = useState(null);

    useEffect(()=>{
        const listen = onAuthStateChanged(auth,(user)=>{
            if(user){
                setAuthUser(user)
            }else{
                setAuthUser(null);
            }
        });
        return () => {
            listen();
        }
    },[]);

        const userSignOut = () =>{
            signOut(auth).then(()=>{
                console.log('user signed out');
            }).catch(error=>console.log(error));
        }

    return(
        <div>{authUser ? 
            <>
            <button onClick={userSignOut}>Sign Out</button>
            <p>{`Signed In as ${authUser.email}`}</p> 
            </>
            :
            <p>Signed Out</p>}
        </div>
    );
}

export { AuthDetails }