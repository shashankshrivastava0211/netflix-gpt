import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { logo, userLogo } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';

const Header = () => {
  const dispatch = useDispatch()
    const navigate = useNavigate()
    const showGptSearch = useSelector(Store=>Store.gpt.showGptSearch)
    
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

    const handleGptSearch=()=>{
      //toggle my gpt search
      dispatch(toggleGptSearchView())
    }
    return (
        <div className='absolute px-8 w-full py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
            <img className='w-44'
            src={logo}
            alt='logo'/>
            <div className='flex p-2'>
              <button className='py-2 px-4 m-2 bg-white text-black rounded-lg font-bold' onClick={handleGptSearch}>{showGptSearch?"Homepage" :"GPTSearch"}</button>
                <img className="w-12 h-12 " alt='userIcon' src={userLogo}/>
                <div className='p-2'>
                <button className='bg-white font-bold rounded-lg p-2'onClick={handleSignout}>Sign Out</button>
                </div>
            </div>
        </div>
        
    )
}

export default Header
