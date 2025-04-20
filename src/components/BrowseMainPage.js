import React from 'react'
import { useSelector } from 'react-redux';
import appStore from '../utils/appStore';
import { MainBGImage } from '../utils/constants';
import { Link, useNavigate } from 'react-router';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ShopCompare from './comparegpt/ShopCompare';
import Movie from './movies/Movie';

const BrowseMainPage = () => {
    const user = useSelector(appStore => appStore.user);
    const navigate = useNavigate();
  return (
    <div className='fixed' >
    {user ? <div>
      <div>
  <p className='absolute text-center mx-80 my-32 font-serif text-rose-950'>Welcome {user.displayName}</p>
      <ArrowDownwardIcon  className='absolute text-center mx-auto my-56 animate-bounce' style={{fontSize:40, left:"15em"}}/>
        <div className='absolute my-80 flex justify-between gap-16' style={{left:'7.5em'}}>
          <ShopCompare/>
          <Link to={'/movies'}><Movie/> </Link>
        </div>
      </div>

    
        <img  src={MainBGImage}/>


        </div> : navigate('/')
    }    

        </div>
    
  )
}

export default BrowseMainPage