import React from 'react'
import BrowseHeader from '../BrowseHeader'
import useFetchMovieList from '../../hooks/useFetchMovieList'
import PrimaryContainer from './PrimaryContainer';
import SecondaryContainer from './SecondaryContainer';
import useFetchTopRating from '../../hooks/useFetchTopRating';


const MovieContainer = () => {
  useFetchMovieList();
  useFetchTopRating();

  return (
    <div>
      {/* <BrowseHeader /> */}
      <PrimaryContainer />
         {/* 
         -PrimaryContainer 
             -VideoBackGround
             -VideoTitle
          -SecondaryContainer
            - MovieList * n
            - Cards * n
         */}
      <SecondaryContainer />
    </div>
  )
}

export default MovieContainer