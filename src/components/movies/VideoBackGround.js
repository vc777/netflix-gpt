import React, { useEffect, useState } from 'react'
import { getOptions } from '../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerList } from '../../utils/movieSlice';

const VideoBackGround = ({movieID}) => {
  const [videoID, setvideoID] = useState(null);
  // const videoID =  useSelector((store) => store.movie?.getTrailerList);
  const dispatch =  useDispatch();
  

useEffect(() => {
  getMovieTrailer();
}, [movieID])

  const getMovieTrailer = async() => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`, getOptions)
    const json = await data.json();
    const filterData =  json.results?.filter((item) => item.type === "Trailer");
    const trailer = filterData?.length ? filterData[0] : json?.results[0];
    
    setvideoID(trailer?.key);
    // dispatch(addTrailerList(trailer?.key));

  }
  
  return (
    <div className='pt-20 bg-gradient-to-t to-slate-500'>
    <iframe 
      className='w-screen aspect-video'
       width="960" 
       height="960" 
       src={"https://www.youtube.com/embed/" + videoID} 
       title="YouTube video player"  
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
   
       >
    </iframe>
    </div>
  )
}

export default VideoBackGround