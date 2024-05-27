import { useEffect } from "react";
import { api_options } from "../constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../MoviesSliceTwo";

const useTopRated = () => {
    const dispatch = useDispatch();

    const getTopRatedMovies = async () => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/movie/top_rated', api_options);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const json = await response.json();
           
            dispatch(addTopRatedMovies(json.results));
        } catch (error) {
            console.error('Failed to fetch top-rated movies:', error);
        }
    };

    useEffect(() => {
        getTopRatedMovies();
    }, [dispatch]);
};

export default useTopRated;
