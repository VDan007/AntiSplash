import React, {useState, useContext} from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Context } from "../../../Context";
import { Link } from "react-router-dom";




function SignUp(){
    const { auth, setUserData } = useContext(Context);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

   

    function handleEmailChange(e){
        setEmail(
            e.target.value
        );
    }

    function handlePasswordChange(e){
        setPassword(
            e.target.value
        );
    }

    function signUp(e){
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password)
        .then ( (userCredential) => {
            console.log(userCredential);
        }).catch((error)=> console.log(error))
        setUserData(email);
    }

    return(
        <div className="signUpContainer">
            <div className='signUpPictureDiv'></div>
            <div>
            <h1>Join Antisplash</h1>
            <div>
                <p>Already have an account?</p>
                <Link to='/login'>Login</Link>
            </div>
            <form onSubmit={signUp}>
                <h1>Create Account</h1>
                <input 
                    type="email" 
                    placeholder="email"
                    value={email}
                    onChange={ handleEmailChange }
                />
                <input 
                    type="password" 
                    placeholder="password" 
                    value= {password}
                    onChange={ handlePasswordChange }
                /> 
                <button type="submit">Sign Up</button>
            </form>
            </div>
            
        </div>
    );
}

export { SignUp };