import React, { useEffect } from 'react'
import { api_options } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../utils/MoviesSliceTwo'

const VideoBackground = ({id}) => {
    const trailerVideo=useSelector(store=>store?.movies?.TrailerVideo)
    const dispatch=useDispatch()
    //fetch my trailer vedio 
    //to make api call we need movie id so lets pass in movie id

    const getMovieTrailer = async ()=>{
        
        const data = await fetch('https://api.themoviedb.org/3/movie/823464/videos',api_options)
        const  json = await data.json()
        

        const filterData =json.results.filter((Video)=>Video.type==="Trailer")//this also returns
       
        const trailer = filterData.length ? filterData[0] : json.results[0]
        
        dispatch(addTrailerVideo(trailer))

    }
    useEffect(()=>{

        getMovieTrailer()
    },[])
    return (
        <div>
            <iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"}  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            
        </div>
    )
}

export default VideoBackground
