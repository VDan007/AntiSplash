import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useContext} from "react";
import { Context } from "../../../Context";
import { Link, useNavigate } from "react-router-dom";

function AuthDetails(){
    const navigate = useNavigate();
    const { auth,authUser,setAuthUser ,setUid } = useContext(Context);
    

    useEffect(()=>{
        const listen = onAuthStateChanged(auth,(user)=>{
            if(user){
                setAuthUser(user)
                setUid(user.uid)
                console.log(user.uid);
                
                   
               
            }else{
                setAuthUser(null);
                setUid('');
            }
        });
        return () => {
            listen();
        }
    },[]);

        const userSignOut = () =>{
            signOut(auth).then(()=>{
                navigate('/');
                console.log('user signed out');

            }).catch(error=>console.log(error));
        }

    return(
        <div className='authdDetailsDiv'>{authUser ? 
            <>
                <Link to='/account'>
                    <p>{authUser.email}</p> 
                </Link>
                <button onClick={userSignOut}>
                        Sign Out 
                </button>
            </>
            
            :

            <>
                <Link  to="/login">
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