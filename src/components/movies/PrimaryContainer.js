import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import VideoBackGround from './VideoBackGround';
import VideoTitle from './VideoTitle';
import BrowseHeader from '../BrowseHeader';
import BrowseMovieHeader from '../BrowseMovieHeader';
import { addMovieList } from '../../utils/movieSlice';

const PrimaryContainer = () => {
  const movies =  useSelector((store) => store.movie?.getMovieList);
  const dispatch =  useDispatch();
  const [currentIndex, setcurrentIndex] = useState(0);



   
    useEffect(() => {
       
        // Set an interval to cycle through the movies
        const intervalID = setInterval(() => {
            setcurrentIndex((prevIndex) => (prevIndex + 1) % movies.length); // Reset to 0 after reaching the end
        }, 15000); // 15 seconds for each movie

        // Cleanup the interval on unmount
        return () => clearInterval(intervalID);

    }, [movies]);
    if(!movies) return;
 dispatch(addMovieList(movies));
  const mainMovies = movies[currentIndex];
    
  const {original_title, overview, id} = mainMovies;

    
  return (
    <div>
      <BrowseMovieHeader />

             <VideoTitle title={original_title} info={overview} movieID={id}/>
             <VideoBackGround movieID={id} />               
    </div>
  )
}

export default PrimaryContainer