import React, { useState } from 'react';
import { Button } from '@mui/material';
import useHelper from '../../utils/useHelpers';

const GPTSearchBar = () => {

  const LS = useHelper();

  console.log(LS);
  

  return (

    <div className='absolute bg-white flex justify-center  w-screen'>
        
        <div className=' flex bg-black mt-44 rounded-full'>
            <input type='text' className='text-lg font-light text-gray-950 w-96 text-center' style={{fontSize:14}} placeholder={LS.promptMsg}/>
            <Button style={{color:'white', fontSize:11}}>{LS.submit}</Button>
        </div>
    </div>

  )
}

export default GPTSearchBar