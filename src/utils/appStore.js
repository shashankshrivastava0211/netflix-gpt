import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";  // Ensure this path is correct
import moviesReducer from "./MoviesSliceTwo"
import gptReducer from "./gptSlice" 
import configReducer from "./configSlice"

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt : gptReducer,
        config:configReducer
    },
});

export default appStore;
