import { useDispatch } from "react-redux";
import { api_options } from "../constants";
import { addPopularMovies } from "../MoviesSliceTwo"; // Ensure the correct path to moviesSlice
import { useEffect } from "react";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/movie/popular', api_options);
            const json = await response.json();
            console.log("popular",json.results);
            dispatch(addPopularMovies(json.results));
        } catch (error) {
            console.error("Failed to fetch now playing movies:", error);
        }
    };

    useEffect(() => {
        getPopularMovies();
    }, []); // Empty dependency array to run once when the component mounts
};

export default usePopularMovies;
