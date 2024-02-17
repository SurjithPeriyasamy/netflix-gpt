import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    movieResults: null,
    movieNames: null,
    openAiKey: "",
  },
  reducers: {
    addOpenAikey: (state, action) => {
      state.openAiKey = action.payload;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { addOpenAikey, addGptMovieResult } = gptSlice.actions;

export default gptSlice.reducer;
