import React from 'react'
import { Button } from '@mui/material'
import useHelper from '../../utils/useHelpers';
import { gptImage } from '../../utils/constants';


const ShopCompare = () => {
  const LS = useHelper();
  

  return (
    <div>
      <img src={gptImage} className='absolute w-24 rounded-xl'/>
      <Button sx={{ color:'white', marginTop:'11.5em', fontWeight:"bold", fontSize:'10px', backgroundColor:'#ff9800'}} className='w-auto h-7' >
        {LS.shopCompare}
        </Button>
    </div>
  )
}

export default ShopCompare