import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    moviesList: [],
    movieDetail: {},
    fevList: localStorage.getItem("fevoriteList")
      ? JSON.parse(localStorage.getItem("fevoriteList"))
      : [],
    fevMoviesList: [],
  },
  reducers: {
    getMovie: (state, action) => {
      state.moviesList = action.payload.data;
    },
    saveMovieId: (state, action) => {
      state.movieDetail = action.payload.movie;
    },
    saveToFev: (state, action) => {
      if (state.fevList.length > 0) {
        const index = state.fevList.indexOf(action.payload.movieId);
        if (index > -1) state.fevList.splice(index, 1);
        else state.fevList.push(action.payload.movieId);
      } else {
        state.fevList.push(action.payload.movieId);
      }

      localStorage.setItem("fevoriteList", JSON.stringify(state.fevList));
    },
    getFevMoviesList: (state, action) => {
      state.fevMoviesList = action.payload.data;
    },
  },
});

export const { getMovie, saveMovieId, saveToFev, getFevMoviesList } =
  moviesSlice.actions;

export default moviesSlice.reducer;
