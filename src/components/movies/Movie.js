import { Button } from '@mui/material'
import React from 'react'
import useHelper from '../../utils/useHelpers';
import { movieImage } from '../../utils/constants';

const Movie = () => {
  const LS = useHelper();
  return (
    <div>
      <img src={movieImage} className='absolute w-24 rounded-xl' />
    <Button sx={{ color:'white', marginTop:'11.5em', fontWeight:"bold", fontSize:'10px', backgroundColor:'#ff9800', marginLeft:'1.5em'}} className='w-auto h-7' >
        {LS.movies}
        </Button>
    </div>
  )
}

export default Movie