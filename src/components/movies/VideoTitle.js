import { Button } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import React, { useEffect, useState } from 'react'
import { getOptions } from '../../utils/constants';

const VideoTitle = ({title,info, movieID}) => {
const [imageID, setimageID] =  useState(null);

    useEffect(() => {
        getMovieImage();
    },[movieID])



     const getMovieImage = async() => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/images`, getOptions);
        const json = await data.json();

        const imagePath = json?.posters[0]?.file_path; 
        setimageID(imagePath)

        // https://image.tmdb.org/t/p/w342/fTrQsdMS2MUw00RnzH0r3JWHhts.jpg
     }
// text-white bg-gradient-to-r from-black
  return (
    <div className='pt-64 px-12 pr-6 w-1/2 bg-gradient-to-r from-black text-white absolute'>
        <img src={`https://image.tmdb.org/t/p/w154/${imageID}`} className='rounded-3xl ml-20 ' />
        <h1 className='w-1/2 text-3xl font-bold'>{title}</h1>
        <p className='py-6 text-sm w-1/2 text-pretty font-medium'>{info}</p>
        <div className='flex'>
            <Button style={{margin:'5px', backgroundColor:'grey'}} variant="contained" >
                <PlayArrowIcon className='p-0.5' />
                Play</Button>
            <Button style={{margin:'5px'}} variant="contained">
                <InfoOutlineIcon className='p-0.5'/>
                More info</Button>
        </div>
    </div>
  )
}

export default VideoTitle