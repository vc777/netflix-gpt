import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [signIn, setSignIn] = useState(false);

    const handleSignInOut = () => {
        setSignIn(!signIn);
    }
  return (
        <div className='relative'>

        <Header/>

        <div className='fixed' >
        <img  src='https://assets.nflxext.com/ffe/siteui/vlv3/98df3030-1c2b-4bd1-a2f5-13c611857edb/web/IN-en-20250331-TRIFECTA-perspective_247b6f06-c36d-4dff-a8eb-4013325c3f8e_large.jpg'/>
        </div>
        
        <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-50'>
        <h1 className='font-bold text-3xl text-left' >{signIn ?  "Sign up" : "Sign In"  }</h1>
        <input type='text' placeholder={signIn ? "Email Address/ Phone Number": "Email Address"  } className='text-sm font-normal p-3 my-2 w-full bg-gray-700'/>
        <input type='password' placeholder={signIn ? "Password" : "Enter Password" } className='text-sm font-normal p-3 my-2 w-full bg-gray-700'/>
        {signIn ? <input type='password' placeholder="Confirm Password" className='text-sm font-normal p-3 my-2 w-full bg-gray-700'/> : "" }
        <button className='text-sm p-4 my-6 bg-red-700 w-full rounded-lg'>
           {signIn ? "Sign In" : "Sign up" } 
        </button>

        <p onClick={handleSignInOut} className='text-xs text-start cursor-pointer'>{signIn ?  "Already a member. Sign In" : "New to Netflix? Sign up now."} </p>
        </form>
    </div>
  )
}

export default Login