import { createSlice } from "@reduxjs/toolkit";


const movieSlice =  createSlice({
    name:"movie",
    initialState:{
        getMovieList:null,
        getTrailerList:null,
        getTopratingList:null
    },
    reducers:{
        addMovieList: (state, action) => {
         state.getMovieList = action.payload;
        },
        addTrailerList: (state, action) => {
            state.getMovieList = action.payload;
        },
        addTopRatingList: (state, action) => {
            state.getTopratingList = action.payload;
        }
    }

})

export const {addMovieList, addTrailerList, addTopRatingList} = movieSlice.actions;
export default movieSlice.reducer;

