import React from 'react'
import MovieCards from './MovieCards'
import { Link } from 'react-router-dom'

const MovieList = ({title , movies}) => {
    
    if(movies===null){
        return (
            <div>Loading</div>
        )
    }
    return (
        <div className='pt-6'>
            <h1 className='bold md:text-3xl text-xl py-4 text-white'>{title}</h1>
            <div className='flex overflow-x-scroll'>
                
            
            <div className='flex'>
            {movies.map(movie =>
    <Link to={`/watch/${movie.id}`} key={movie.id}>
     <MovieCards posterPath={movie.poster_path} />
    </Link>
)}

            
            </div>
            </div>
            
        </div>
    )
}

export default MovieList
