import React from 'react'
import lang from '../utils/languageConstants'
import { SUPPORTED_LANGUAGES } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { changelang } from '../utils/configSlice'

const GptSearchBar = () => {
    const language = useSelector(store=>store.config.lang)
    
    const dispatch = useDispatch()
    const handleLanguageChange =(e)=>{
        dispatch(changelang(e.target.value))

    }
    return (
        <div className='pt-[6%] flex justify-center'>
            <form className='w-1/2 bg-black rounded-xl'>
                <input type='text'
                className='p-4 m-4 w-7/12 rounded-lg' 
                
                placeholder={lang[language].placeHolder}/>

                
                <button className='py-2 px-4 rounded-lg bg-red-700 text-white'>{lang[language].search}</button>
                <select className='p-2 bg-gray-900 text-white m-2' onChange={handleLanguageChange}>
                    {SUPPORTED_LANGUAGES.map(lang=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
                
                </select>
            </form>
        </div>
    )
}

export default GptSearchBar
