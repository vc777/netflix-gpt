import { configureStore, createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({

    name: "config",
    initialState: {
        lang: "en",
    },

    reducers: {
        changeLanguageReducer: (state, action) => {
            state.lang = action.payload;
        }
    } 

}) 

export const {changeLanguageReducer} = configSlice.actions;
export default configSlice.reducer;
