import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()
    const handleSignout=()=>{
        signOut(auth).then(() => {
            navigate("/")
            
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
            navigate("/error")
          });
    }
    return (
        <div className='absolute px-8 w-full py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
            <img className='w-44'
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt='logo'/>
            <div className='flex p-2'>
                <img className="w-12 h-12 " alt='userIcon' src="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"/>
                <div className='p-2'>
                <button className='bg-white font-bold rounded-lg p-2'onClick={handleSignout}>Sign Out</button>
                </div>
            </div>
        </div>
        
    )
}

export default Header