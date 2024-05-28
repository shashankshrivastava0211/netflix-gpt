import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondryContainer = () => {
    const movies = useSelector(store=>store.movies)
    return (
        <div className='bg-black'>
            {/* {
                lot of movies list like popular 
                each list will have multiple cards
                trending 
                now playing 
                comedy
                horror

            } */}
            <div className='mt-0'>
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
            <MovieList title={"Top-Rated"} movies={movies?.addTopRatedMovies}/>
            <MovieList title={"up comming Movies"} movies={movies?.addUpComming}/>
            <MovieList title={"Popular"} movies={movies.addPopularMovies}/>
             <MovieList title={"Horror"} movies={movies.addTopRatedMovies}/>
            <MovieList title={"Drama"} movies={movies.nowPlayingMovies}/>
            </div>
        </div>
    )
}

export default SecondryContainer
