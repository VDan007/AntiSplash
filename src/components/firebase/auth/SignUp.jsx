import React, {useState, useContext, useEffect} from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Context } from "../../../Context";
import { Link, useNavigate } from "react-router-dom";




function SignUp(){
    const navigate = useNavigate();
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
                    setUserData(email,userCredential.user.uid);
                    navigate('/');
                })
        .catch((error)=> {
            console.log(error)
            alert('Please provide a valid email!')})
      
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
            <div className="alreadyDiv">
                <p>Already have an account?</p>
                <Link to='/login'>Login</Link>
            </div>
            <button className='fbLoginBtn loginBtnsINputs'>Join using Facebook</button>
            <form onSubmit={signUp}>
                
                <label htmlFor='email'>Email</label>
                <input 
                    name="email"
                    type="email" 
                    value={email}
                    onChange={ handleEmailChange }
                    required
                />
                <label htmlFor='password'>Password </label>
                <input 
                    name='password'
                    type="password"
                    minLength={6}
                    value= {password}
                    onChange={ handlePasswordChange }
                    required
                /> 
                <button type="submit" className='loginBtn'>Join</button>
            </form>
                <p>By joining, you agree to the Terms and Privacy Policy.</p>
            </div>
            
        </div>
    );
}

export { SignUp };