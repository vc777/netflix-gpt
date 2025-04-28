import React from 'react'
import { SUPPORTED_LANGUAGES } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { changeLanguageReducer } from '../utils/configSlice';

const useLanguageHook = () => {
    const dispatch =  useDispatch();
    const testtest= useSelector((store) => store.config.lang)
    const handleLangChange = (e) => {
        dispatch(changeLanguageReducer(e.target.value));
    }
    // <select className='bg-orange-800 text-white rounded-lg text-xs w-auto'>
    const languageOptions = <select onClick={handleLangChange} className='bg-orange-700 text-white rounded-2xl text-xs w-auto h-6 mt-2'> {SUPPORTED_LANGUAGES.map((lang) =>  <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}</select>
    
    return languageOptions;
}

export default useLanguageHook