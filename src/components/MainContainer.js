import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
    const movies =useSelector(store=>store.movies?.nowPlayingMovies)
    if(movies===null)return;//early return 
    const main = movies[0]
    
    const {original_title,overview,id}=main
    
    return (
        <div className='md:pt-0 bg-black pt-[30%]'>
            <VideoTitle title={original_title} overview ={overview} />
            <VideoBackground id={id} />
        </div>
    )
}

export default MainContainer
