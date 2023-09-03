import { createSlice } from "@reduxjs/toolkit";

const moviesCacheSlice = createSlice({
  name: "cache",
  initialState: {
    videoDetailsCache: {},
    videosCache: {},
  },
  reducers: {
    addVideoDetailsCache: (state, action) => {
      state.videoDetailsCache = {
        ...state.videoDetailsCache,
        ...action.payload,
      };
    },
    addVideosCache: (state, action) => {
      state.videosCache = { ...state.videosCache, ...action.payload };
    },
  },
});

export default moviesCacheSlice.reducer;
export const { addVideoDetailsCache, addVideosCache } =
  moviesCacheSlice.actions;
