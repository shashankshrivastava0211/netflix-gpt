import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { logo, userLogo } from '../utils/constants';

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleSignout=()=>{
        signOut(auth).then(() => {
            
            
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
            navigate("/error")
          });
         
    }
    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth, (user) => {
            if (user) {
              
              const { uid,email,displayName,photoURL } = user;
              
              dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
              navigate("/browse")
              


            } else {
              dispatch(removeUser())
              navigate("/")
              
            }
          });
          //this will be called when components unmount so unsubcribe on auth state
          return ()=>unsubscribe();

    },[])
    return (
        <div className='absolute px-8 w-full py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
            <img className='w-44'
            src={logo}
            alt='logo'/>
            <div className='flex p-2'>
                <img className="w-12 h-12 " alt='userIcon' src={userLogo}/>
                <div className='p-2'>
                <button className='bg-white font-bold rounded-lg p-2'onClick={handleSignout}>Sign Out</button>
                </div>
            </div>
        </div>
        
    )
}

export default Header
