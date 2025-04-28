import React from 'react'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { signOut } from 'firebase/auth';
import { auth } from '../../utils/firebaseConfig';
import { Link, useNavigate } from 'react-router';
import { AILogo, BrowseLeftLogo, BrowseRightLogo } from '../../utils/constants';
import useLanguageHook from '../../hooks/useLanguage';


const GPTHeader = () => {

    const navigate =  useNavigate();
    const languageOptions =  useLanguageHook();
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
    <div className='absolute w-full px-8 py-2  bg-opacity-85 z-10 rounded-lg flex justify-between items-center'>
    {/* Logo on the left */}
    <Link to={'/'}>
      <a>
        <img className='w-24 object-contain' src={AILogo} alt='logo'/>
      </a>
    </Link>
    {/* Logo on the right */}
    <div className='flex'>
      {languageOptions}
      <Link to={'/'}>
      <a>
        <img className='w-6 m-2' src={BrowseRightLogo} alt='logo'/>
      </a>
    </Link>
    <button onClick={handleSignout} className='text-xs m-2 text-orange-700'>
    <ExitToAppIcon/>
    </button>
    </div>
</div>
  )
}

export default GPTHeader