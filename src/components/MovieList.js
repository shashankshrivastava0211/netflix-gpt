import React from 'react'
import MovieCards from './MovieCards'

const MovieList = ({title , movies}) => {
    console.log(movies)
    if(movies===null){
        return (
            <div>Loading</div>
        )
    }
    return (
        <div className='pt-6'>
            <h1 className='bold text-3xl py-4 text-white'>{title}</h1>
            <div className='flex overflow-x-scroll'>
                
            
            <div className='flex'>
                { movies.map(movie=><MovieCards posterPath={movie.poster_path} key={movie.id}/>)}
            
            </div>
            </div>
            
        </div>
    )
}

export default MovieList
