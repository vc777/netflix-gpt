import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useLayoutEffect } from 'react'
import { auth } from '../utils/firebaseConfig';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router';
import { BrowseLeftLogo, SUPPORTED_LANGUAGES } from '../utils/constants';
import useLanguageHook from '../hooks/useLanguage';


const Header = () => {
  const dispatch =  useDispatch();
  const navigate = useNavigate();
  const languageOptions =  useLanguageHook();

  useEffect(() => {
    // Set up the listener
  const unSubscribe =  onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid, email, displayName } = user;
          dispatch(addUser({uid:uid, email:email, displayName:displayName}))
          navigate('/browse')
          // ...
        } else {
            dispatch(removeUser());
            navigate('/')
            
        }
      });

      return () => {
        unSubscribe();
      }

},[])

  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-orange-400 z-10 rounded-lg flex justify-between items-center'>
    {/* Logo on the left */}
    <a href='/'>
        <img className='w-44 object-contain bg-transparent' src={BrowseLeftLogo} alt='logo'/>
    </a>
    {/* Logo on the right */}
    
   {/* {SUPPORTED_LANGUAGES.map((lang) =>  <option key={lang.id} value={lang.value}>{lang.name}</option>)} */}
   {languageOptions}
   {/* </select> */}

 
</div>
  )
}

export default Header