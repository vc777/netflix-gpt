import React from 'react'
import { Button } from '@mui/material'
import useHelper from '../../utils/useHelpers';


const ShopCompare = () => {
  const LS = useHelper();
  

  return (
    <div>
        <Button variant="contained" color="success">
        {LS.shopCompare}
        </Button>
    </div>
  )
}

export default ShopCompare