import React, { useEffect } from 'react'
import { getOptions } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addMovieList } from '../utils/movieSlice'

const useFetchMovieList = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      getMoviesData();
    }, [])
    
    const getMoviesData = async() => {
       const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', getOptions)
       const json = await data.json();
       //optional chaining
       dispatch(addMovieList(json.results))
       
      }



}

export default useFetchMovieList