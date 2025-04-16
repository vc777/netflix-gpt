import React from 'react'
import { useSelector } from 'react-redux';
import appStore from '../utils/appStore';

const Prompt = () => {
    const user = useSelector(appStore => appStore.user);
    console.log(user, "idhe");
  
  return (
    <div className='fixed' >
 {user && <div>
<p className='absolute text-center mx-80 my-32'>Welcome {user.displayName}</p>
        <img  src='https://img.freepik.com/premium-vector/farmer-horse-plowing-field-sunrise_218660-244.jpg?w=1380'/>
        </div>
    }    
        </div>
    
  )
}

export default Prompt