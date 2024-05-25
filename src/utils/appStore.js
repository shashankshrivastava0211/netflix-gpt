import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";  // Ensure this path is correct
import moviesReducer from "./MoviesSliceTwo" 

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
    },
});

export default appStore;
