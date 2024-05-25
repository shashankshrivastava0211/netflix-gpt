import { createSlice } from "@reduxjs/toolkit";

const moviesSliceTwo = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
    },
});
export const { addNowPlayingMovies } = moviesSliceTwo.actions;
export default moviesSliceTwo.reducer;