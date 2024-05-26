import { createSlice } from "@reduxjs/toolkit";


const moviesSliceTwo = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        TrailerVideo :null,
        addPopularMovies : null,
        addTopRatedMovies :null,
        addUpComming :null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.TrailerVideo=action.payload;

        },
        addPopularMovies :(state,action)=>{
            state.addPopularMovies =action.payload
        },
        addTopRatedMovies :(state,action)=>{
            state.addTopRatedMovies=action.payload
        },
        addUpComming :(state,action)=>{
            state.addUpComming=action.payload
        }
    },
});
export const { addNowPlayingMovies ,addTrailerVideo,addPopularMovies,addTopRatedMovies,addUpComming} = moviesSliceTwo.actions;
export default moviesSliceTwo.reducer;