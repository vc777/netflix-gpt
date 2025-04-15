import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkvalidData } from '../utils/checkValidation';
import { auth } from '../utils/firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Navigate, useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
const Login = () => {
    const dispatch =  useDispatch();
    const navigate =  useNavigate();
    const [signIn, setSignIn] = useState(false);
    const email =  useRef(null);
    const displayName = useRef(null);
    const password =  useRef(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [count, setCount] = useState(0);

    const toggleSignin = () => {
        setSignIn(!signIn);
    }

    // const handleValidationCheck = () => {
       
    //    const message = checkvalidData(userName.current.value, email.current.value, password.current.value);
    //     setErrorMessage(message);
        
    // }

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
                    console.log("Profile Name is updated as : ", displayName.current.value);
                    const {uid, email, displayName } = auth.currentUser;
                    dispatch(addUser({uid:uid, email:email, displayName:displayName}))
                    navigate('/browse');
   
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
                  console.log(user);
                  navigate('/browse');
                  
                  // ...
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
        <img  src='https://img.freepik.com/premium-vector/farmer-horse-plowing-field-sunrise_218660-244.jpg?w=1380'/>
        </div>
        
        <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-50'>
        <h1 className='font-bold text-3xl text-left' >{signIn ?  "Sign up" : "Sign In"  }</h1>
        {signIn && <input ref={displayName} type='text' placeholder="Name" className='text-sm font-normal p-3 my-2 w-full bg-gray-700'/>}        
        <input ref={email} type='text' placeholder={signIn ? "Email Address/ Phone Number": "Email Address"  } className='text-sm font-normal p-3 my-2 w-full bg-gray-700'/>
        <input ref={password} type='password' placeholder={signIn ? "Password" : "Enter Password" } className='text-sm font-normal p-3 my-2 w-full bg-gray-700'/>
        {signIn && <input type='password' placeholder="Confirm Password" className='text-sm font-normal p-3 my-2 w-full bg-gray-700'/> }
        
        <p className='text-red-500 text-sm'>{errorMessage}</p>
        <button className='text-sm p-4 my-6 bg-orange-700 w-full rounded-lg' onClick={handleValidationCheck}>
           {signIn ? "Sign up" : "Sign in" } 
        </button>
        <p onClick={toggleSignin} className='text-xs text-start cursor-pointer'>{signIn ?  "Already a member. Sign In" : "New to Netflix? Sign up now."} </p>
        </form>
    </div>
  )
}

export default Login