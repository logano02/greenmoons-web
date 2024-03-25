import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        moviesId: [],
        moviesList: {}
    },
    reducers: {}
})

export default moviesSlice.reducer