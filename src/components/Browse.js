import React from 'react'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebaseConfig';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import appStore from '../utils/appStore';
import BrowseMainPage from './BrowseMainPage';
import { BrowseLeftLogo, BrowseRightLogo } from '../utils/constants';

const Browse = () => {

  const navigate =  useNavigate();
   
  const handleSignout = () => {

    signOutAction();
  }

  async function signOutAction() {
    try{
   await signOut(auth);
      navigate("/");
      // window.location.reload();
      console.log("signout API call executed   ");
      
    } catch(error) {
      navigate('/browse')
    }
  }
  return (<>
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-orange-400 z-10 rounded-lg flex justify-between items-center'>
    {/* Logo on the left */}
    <a href='/browse'>
        <img className='w-44 object-contain bg-transparent' src={BrowseLeftLogo} alt='logo'/>
    </a>

    {/* Logo on the right */}
    <div className='flex'>
    <a href='/browse'>
        <img className='w-6 m-2' src={BrowseRightLogo} alt='logo'/>
    </a>
    <button onClick={handleSignout} className='text-xs m-2 text-orange-700'>
    <ExitToAppIcon/>
    </button>
    </div>
</div>

<BrowseMainPage />
</>
  )
}

export default Browse