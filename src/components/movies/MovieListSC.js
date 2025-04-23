import React from 'react'
import MovieCardSC from './MovieCardSC';

const MovieListSC = ({title, movieList}) => {
    if(!movieList) return;
//     const  titleFinal = movieList.poster_path;
// console.log(titleFinal, "Final ra baba");



  return (
    <div className='bg-black'>
        <h1 className='text-white text-lg text-left '>{title}</h1>
        <div className='flex justify-between overflow-x-scroll'>
        {movieList.map((movie) => (
            <div key={movie.id}>
            <MovieCardSC  moviePoster={movie.poster_path}/>
            </div>
        ))}
        </div>
    </div>
  )
}

export default MovieListSC