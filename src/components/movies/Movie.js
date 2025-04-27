import { Button } from '@mui/material'
import React from 'react'
import useHelper from '../../utils/useHelpers';

const Movie = () => {
  const LS = useHelper();
  return (
    <div>
    <Button variant="contained">
        {LS.movies}
        </Button>
    </div>
  )
}

export default Movie