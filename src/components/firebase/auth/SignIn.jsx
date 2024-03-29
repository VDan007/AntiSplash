import React, {useState, useContext} from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Context } from "../../../Context";
import{ Link, useNavigate } from "react-router-dom";




function SignIn(){
    const { auth } = useContext(Context);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

   

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
            navigate('/');
        }).catch(()=>alert('no such user'))
       
    }

    return(
        <div className="signInContainer">
            <div className='signInDiv'>
                <img src="/unsplash-fill.svg" className="logoImg" alt="" />
                <h1>Login</h1>
                <p>Wellcome back.</p>
                <button className='fbLoginBtn loginBtnsINputs'>Login with Facebook</button>
                <p>OR</p>
                <form className='signInForm' onSubmit={signIn}>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input 
                        name='email'
                        type="email" 
                        value={email}
                        onChange={ handleEmailChange }
                        className='loginBtnsINputs '
                        required
                    />
                    <label htmlFor="password">
                        Password
                    </label>
                    <input 
                        name='password'
                        type="password" 
                        value= {password}
                        onChange={ handlePasswordChange }
                        className='loginBtnsINputs'
                        required
                    /> 
                    <button type="submit" className='loginBtnsINputs loginBtn'>
                        Login
                    </button>
                </form>
                <div className='noAccountDiv'>
                    <p>Don't have an account?</p>
                    <Link to="/join">Join Antisplash</Link>
                </div>

            </div>
        </div>
    );
}

export { SignIn };