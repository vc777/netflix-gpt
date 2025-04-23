import React from 'react'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebaseConfig';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import appStore from '../utils/appStore';
import { BrowseLeftLogo, BrowseRightLogo } from '../utils/constants';


const BrowseMovieHeader = () => {

    const navigate =  useNavigate();
   
    const handleSignout = () => {
  
      signOutAction();
    }
  
    async function signOutAction() {
      try{
     await signOut(auth);
        navigate("/");
        // window.location.reload();
        
      } catch(error) {
        navigate('/browse')
      }
    }
    
  return (
    <div className='absolute w-full px-8 py-2 mt-56  flex justify-center items-center gap-2'>
    {/* Logo on the left */}
    <div className='text-center '>
    <a href='/browse'>
        <img className='w-44 object-contain ' src={BrowseLeftLogo} alt='logo'/>
    </a>
    </div>
    {/* Logo on the right */}
    <div className='flex  text-end'>
    {/* <a href='/browse' className=' bg-white rounded-xl'>
        <img className='w-6 m-2' src={BrowseRightLogo} alt='logo'/>
    </a> */}
    <button onClick={handleSignout} className='text-xs m-2 text-orange-700'>
    <ExitToAppIcon/>
    </button>
    </div>
</div>
  )
}

export default BrowseMovieHeader