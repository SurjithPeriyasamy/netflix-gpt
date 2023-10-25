import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResults: null,
    movieNames: null,
    openAiKey: "",
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addOpenAikey: (state, action) => {
      state.openAiKey = action.payload;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    closeGptSearch: (state, action) => {
      state.showGptSearch = false;
    },
  },
});

export const {
  toggleGptSearchView,
  addOpenAikey,
  closeGptSearch,
  addGptMovieResult,
} = gptSlice.actions;

export default gptSlice.reducer;
