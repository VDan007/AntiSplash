import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useContext} from "react";
import { Context } from "../../../Context";
import { Link } from "react-router-dom";

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
        <div className='authdDetailsDiv'>{authUser ? 
            <>
                <p>{authUser.email}</p> 
                <button onClick={userSignOut}>
                        Sign Out 
                </button>
            </>
            
            :

            <>
                <Link to="/login">
                    <p>Log in</p>
                </Link>
                <span> / </span>
                <Link to="/join">
                    <p>Sign Up</p>
                </Link>
            </>
        }
        </div>
    );
}

export { AuthDetails }