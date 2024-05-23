import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkvalidateData } from '../utils/validate';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword , updateProfile  } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';



const Login = () => {
    const navigate = useNavigate()
    const [isSignInForm , setisSignInForm] = useState(true);
    const dispatch = useDispatch();
    //login
    const Email =useRef(null);
    const name = useRef(null)
    const password =useRef(null)
    const [error,setError]=useState(null)


    const toggleSignIn =()=>{
        setisSignInForm(!isSignInForm);//not of is signup for for toggeling 

    }

    const handleButtonClick=()=>{
        //here we will handle button if its a sign in button we will make other wise let user login but before it we will validate 
         const message = checkvalidateData(Email.current.value,password.current.value)
         setError(message)
        // console.log(Email.current.value)
        // console.log()
        if(message) return;//agar koi message hai matlab either password ya e-mail valid nhi h to yahi se return ho jao else 
        //create a new user


        if(!isSignInForm){//login logic
            
            createUserWithEmailAndPassword(auth, Email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
        displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
      }).then(() => {
        const { uid,email,displayName,photoURL } = auth.currentUser;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
        navigate("/browse")
      }).catch((error) => {
        setError(error.message)
      });
    console.log(user)
    
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorCode+"-"+errorMessage)
  });

        }
        else{//sign up logic
            signInWithEmailAndPassword(auth, Email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorCode +"-" + errorMessage)
  });

        }
        
    }   
    return (
        <div>
            <Header />
            <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt='background'/>
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && (
                    <input type='text' ref={name} placeholder='Full Name' className='p-4 my-4 w-full bg-gray-800'/> 

                )}
                <input ref={Email} type='text' placeholder='Email Adress' className='p-4 my-4 w-full bg-gray-800'/>
               
                <input type='password'placeholder='password' ref={password} className='p-4 my-4 w-full bg-gray-800'/>
                <p className='text-red-500 font-bold  p-1 my-2'>{error}</p>
                
                <button className='p-4 my-6 bg-red-700 w-full mr-2 rounded-2xl'onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='py-4 cursor-pointer'  onClick={toggleSignIn}>{ isSignInForm ? "New to Netflix? Sign Up Now" : "Already a registered? Sign in in  Now "}</p>
            </form>
        </div>
    )
}

export default Login
