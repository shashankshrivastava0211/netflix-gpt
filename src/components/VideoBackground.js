import React, { useEffect } from 'react'
import { api_options } from '../utils/constants'

const VideoBackground = ({id}) => {
    //fetch my trailer vedio 
    //to make api call we need movie id so lets pass in movie id

    const getMovieTrailer = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/823464/videos',api_options)
        const  json = await data.json()
        console.log(json)

        const filterData =json.results.filter((Video)=>Video.type==="Trailer")//this also returns
       
        const trailer = filterData.length ? filterData[0] : json.results[0]

    }
    useEffect(()=>{

        getMovieTrailer()
    },[])
    return (
        <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/XeDbyVODQ5M?si=9bWdNBjGKhax3erd" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            
        </div>
    )
}

export default VideoBackground
