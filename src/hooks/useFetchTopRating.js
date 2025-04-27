import { useEffect } from 'react'
import { getOptions } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addTopRatingList } from '../utils/movieSlice'

const useFetchTopRating = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      getMoviesData()
    }, [])
    
    const getMoviesData = async() => {
       const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', getOptions)
       const json = await data.json();
       //optional chaining
       dispatch(addTopRatingList(json.results))
       
      }



}

export default useFetchTopRating