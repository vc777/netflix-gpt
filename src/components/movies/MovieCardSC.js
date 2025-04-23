import React from 'react'

const MovieCardSC = ({moviePoster}) => {
  return (
    // inset-0 opacity-75 transition-opacity duration-300 hover:size-40 hover:h-96
    <div className=' bg-black  m-0.5 w-32'>
    <img className='size-52'  src={`https://image.tmdb.org/t/p/w342/${moviePoster}`}/>    
    </div>
  )
}

export default MovieCardSC