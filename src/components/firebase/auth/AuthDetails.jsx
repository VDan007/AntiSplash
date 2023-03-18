import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useContext} from "react";
import { Context } from "../../../Context";

function AuthDetails(){
    const { auth,authUser,setAuthUser } = useContext(Context);
    

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
            <p>{`Signed In as ${authUser.email}`}</p> 
            </>
            :
            <button>Log in</button>}
            <span> / </span>
            <button onClick={userSignOut}>{
                authUser ?
                'Sign Out' 
                :
                'Sign Up'
            }</button>
        </div>
    );
}

export { AuthDetails }