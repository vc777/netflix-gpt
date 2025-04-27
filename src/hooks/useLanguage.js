import React from 'react'
import { SUPPORTED_LANGUAGES } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { changeLanguageReducer } from '../utils/configSlice';

const useLanguageHook = () => {
    const dispatch =  useDispatch();
    const handleLangChange = (e) => {
        dispatch(changeLanguageReducer(e.target.value));
    }
    // <select className='bg-orange-800 text-white rounded-lg text-xs w-auto'>
    const languageOptions = <select onClick={handleLangChange} className='bg-orange-800 text-white rounded-lg text-xs w-auto'> {SUPPORTED_LANGUAGES.map((lang) =>  <option key={lang.id} value={lang.value}>{lang.name}</option>)}</select>
    
    return languageOptions;
}

export default useLanguageHook