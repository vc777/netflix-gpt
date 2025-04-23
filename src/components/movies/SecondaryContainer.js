import React from 'react'
import MovieListSC from './MovieListSC'
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies =  useSelector((store) => store.movie?.getMovieList);
  const moviesTopRating =  useSelector((store) => store.movie?.getTopratingList);

  const titleList = [
          {
            id:0,
            newPopular : "New Popular"
          },
          {
            id:1,
            newPopular : "Trending"
          },

          
  ]
  return (
    <div className='-mt-60 z-20'>
      
            <div>
            <MovieListSC title ={titleList[0].newPopular} movieList={movies} />
            </div>
            <div>
            <MovieListSC title ={titleList[1].newPopular} movieList={moviesTopRating} />
            </div>
{/* {titleList.map((item) => (
            <div key={item.id}>
            <MovieListSC title ={item.newPopular} movieList={moviesTopRating} />
            </div>
      ))} */}
 

      {/* 
      Movie List - Popular
        Heading
        inside it MOVIECARD *N using map function 
      Movie List - Now Playing
      Movie List - Trending
      Movie List - Horror

      */}
    </div>
  )
}

export default SecondaryContainer