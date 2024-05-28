import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkvalidateData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const dispatch = useDispatch();
  const Email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);
  const [error, setError] = useState(null);

  const toggleSignIn = () => {
    setisSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkvalidateData(Email.current.value, password.current.value);
    setError(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, Email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({ uid, email, displayName, photoURL }));
          }).catch((error) => {
            setError(error.message);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(`${errorCode}-${errorMessage}`);
        });
    } else {
      signInWithEmailAndPassword(auth, Email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(`${errorCode}-${errorMessage}`);
        });
    }
  };

  return (
    <div className="relative min-h-screen">
      <>
      <Header />
      </>
      <div className='absolute inset-0'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt='background'
          className='w-full h-full object-cover' />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className='md:pt-32 pt-32'>
      <form onSubmit={(e) => e.preventDefault()} className='relative  md:w-3/12 w-11/12 mx-auto p-12 bg-black bg-opacity-80 text-white rounded-lg'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (
          <input type='text' ref={name} placeholder='Full Name' className='p-4 my-4 w-full bg-gray-800' />
        )}
        <input ref={Email} type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-800' />
        <input type='password' placeholder='Password' ref={password} className='p-4 my-4 w-full bg-gray-800' />
        <p className='text-red-500 font-bold p-1 my-2'>{error}</p>
        <button className='p-4 my-6 bg-red-700 w-full rounded-2xl' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignIn}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign in Now"}</p>
      </form>
      </div>
    </div>
  );
};

export default Login;
