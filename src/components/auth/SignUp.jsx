import React, {useState, useContext} from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Context } from "../../Context";




function SignUp(){
    const { auth } = useContext(Context);
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
    }

    return(
        <div className="signUpContainer">
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
    );
}

export { SignUp };