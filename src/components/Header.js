import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebaseConfig';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router';


const Header = () => {
  const dispatch =  useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
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

},[])

  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-orange-400 z-10 rounded-lg flex justify-between items-center'>
    {/* Logo on the left */}
    <a href='/'>
        <img className='w-44 object-contain bg-transparent' src='https://dosmioss.com/admin/img/logo.png' alt='logo'/>
    </a>

    {/* Logo on the right */}
   
</div>
  )
}

export default Header