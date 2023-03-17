import React, {useState, useContext} from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Context } from "../../../Context";




function SignIn(){
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

    function signIn(e){
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then ( (userCredential) => {
            console.log(userCredential);
        }).catch((error)=> console.log(error))
    }

    return(
        <div className="signInContainer">
            <form onSubmit={signIn}>
                <h1>Log In</h1>
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
                <button type="submit">Log In</button>
            </form>
        </div>
    );
}

export { SignIn };