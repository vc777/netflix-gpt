import React from 'react'
import BrowseHeader from '../BrowseHeader'
import useFetchMovieList from '../../hooks/useFetchMovieList'
import PrimaryContainer from './PrimaryContainer';
import SecondaryContainer from './SecondaryContainer';


const MovieContainer = () => {
  useFetchMovieList();

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