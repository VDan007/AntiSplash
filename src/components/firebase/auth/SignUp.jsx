import React, {useState, useContext, useEffect} from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Context } from "../../../Context";
import { Link } from "react-router-dom";




function SignUp(){
    const { auth, setUserData,pictures } = useContext(Context);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [bgPhoto,setBgPhoto] = useState('');
    console.log(bgPhoto);
    useEffect(
        ()=>{
            fetch('https://source.unsplash.com/random/?nature')
            .then(photo=>setBgPhoto(photo.url))

        },[]
    );
    

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
            <div className='signUpPictureDiv'
                 style={{
                    backgroundImage: `url(${bgPhoto})`,
                    width: '100%',
                    heigth: '100%'}}
            >
                <img src="/unsplash-fill.svg" className="logoImg" alt="" />
                <h1>Creation starts here</h1>
                <p>
                    Access a humongous amount of free,
                    high resoution photos you shoud find 
                    on <a href='https://unsplash.com/' target='_blank'>Unsplash</a> 😘
                </p>
                </div>    
            <div className='signUpFormDiv'>
            <h1>Join Antisplash</h1>
            <div>
                <p>Already have an account?</p>
                <Link to='/login'>Login</Link>
            </div>
            <button className='fbLoginBtn loginBtnsINputs'>Join using Facebook</button>
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
                <button type="submit">Join</button>
            </form>
            </div>
            
        </div>
    );
}

export { SignUp };