import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
    const movies =useSelector(store=>store.movies?.nowPlayingMovies)
    if(movies===null)return;//early return 
    const main = movies[0]
    console.log(main)
    const {original_title,overview,id}=main
    
    return (
        <div>
            <VideoTitle title={original_title} overview ={overview} />
            <VideoBackground id={id} />
        </div>
    )
}

export default MainContainer
