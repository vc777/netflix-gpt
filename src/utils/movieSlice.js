import React from 'react'
import { createSlice } from "@reduxjs/toolkit";


const movieSlice =  createSlice({
    name:"movie",
    initialState:{
        getMovieList:null,
        getTrailerList:null
    },
    reducers:{
        addMovieList: (state, action) => {
         state.getMovieList = action.payload;
        },
        addTrailerList: (state, action) => {
            state.getMovieList = action.payload;
        }
    }

})

export const {addMovieList, addTrailerList} = movieSlice.actions;
export default movieSlice.reducer;

