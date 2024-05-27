import { useDispatch } from "react-redux";
import { api_options } from "../constants";
import { addNowPlayingMovies } from "../MoviesSliceTwo"; // Ensure the correct path to moviesSlice
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/movie/now_playing', api_options);
            const json = await response.json();
            
            dispatch(addNowPlayingMovies(json.results));
        } catch (error) {
            console.error("Failed to fetch now playing movies:", error);
            dispatch()
        }
    };

    useEffect(() => {
        getNowPlayingMovies();
    }, []); // Empty dependency array to run once when the component mounts
};

export default useNowPlayingMovies;
