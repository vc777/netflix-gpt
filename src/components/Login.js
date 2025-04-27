import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkvalidData } from '../utils/checkValidation';
import { auth } from '../utils/firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BrowseLeftLogo, language, MainBGImage } from '../utils/constants';
import useHelper, { langSelect, LS } from '../utils/useHelpers';

const Login = () => {
    
    const dispatch =  useDispatch();
    const LS = useHelper();
    const [signIn, setSignIn] = useState(false);
    const email =  useRef(null);
    const displayName = useRef(null);
    const password =  useRef(null);
    const [errorMessage, setErrorMessage] = useState(null);


    const toggleSignin = () => {
        setSignIn(!signIn);
    }

    const handleValidationCheck = () => {
      // let message;
  
      // if (signIn) {
      //     // Validate all fields when in Sign Up mode
      //     if (userName.current) {
      //         message = checkvalidData(userName.current.value, email.current.value, password.current.value);
              
      //     }
      // } else {
      //     // Only validate email and password when in Sign In mode
      //     message = checkvalidData(null, email.current.value, password.current.value);
          
      //   }
      const message = checkvalidData(email.current.value, password.current.value)
  
      setErrorMessage(message);
      
      // if(message) return;

      if(signIn) { //sign up Logic 
            createUserWithEmailAndPassword(auth, email.current.value,  password.current.value)
                .then((userCredential) => {
                  // Signed up 
                  const user = userCredential.user;
                  //set displayName seperately after user creation
                  return updateProfile(user, {
                    displayName:  displayName.current.value
                  }).then (() => {
                    const {uid, email, displayName } = auth.currentUser;
                    dispatch(addUser({uid:uid, email:email, displayName:displayName}))
      
   
                  })
                  
                  // ...
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  setErrorMessage(errorCode, "-", errorMessage);
                  // ..
                });
            }else {
              signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                  // Signed in 
                  const user = userCredential.user;

                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  setErrorMessage(errorCode, "-", errorMessage);
                });
            }
  }


  return (
        <div className='relative'>

        <Header/>

        <div className='fixed' >
        <img  src={MainBGImage}/>
        </div>
        
        <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-50'>
        <h1 className='font-bold text-3xl text-left' >{signIn ?  `${LS.signUp}` : `${LS.signIn}`  }</h1>
        {signIn && <input ref={displayName} type='text' placeholder={LS.username} className='text-sm font-normal p-3 my-2 w-full bg-gray-700'/>}        
        <input ref={email} type='text' placeholder={signIn ? `${LS.emailIdorPhone}`: `${LS.emailId}`  } className='text-sm font-normal p-3 my-2 w-full bg-gray-700'/>
        <input ref={password} type='password' placeholder={LS.password} className='text-sm font-normal p-3 my-2 w-full bg-gray-700'/>
        {signIn && <input type='password' placeholder={LS.cpassword} className='text-sm font-normal p-3 my-2 w-full bg-gray-700'/> }
        
        <p className='text-red-500 text-sm'>{errorMessage}</p>
        <button className='text-sm p-4 my-6 bg-orange-700 w-full rounded-lg' onClick={handleValidationCheck}>
           {signIn ? `${LS.signUp}` : `${LS.signIn}` } 
        </button>
        <p onClick={toggleSignin} className='text-xs text-start cursor-pointer'>{signIn ?  `${LS.alreadyUserMsg}` : `${LS.newtoNetflixmsg}`} </p>
        </form>
    </div>
  )
}

export default Login