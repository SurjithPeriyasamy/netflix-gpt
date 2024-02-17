import { createSlice } from "@reduxjs/toolkit";

const moviesCacheSlice = createSlice({
  name: "cache",
  initialState: {
    videoDetailsCache: {},
    videosCache: {},
    videoId: null,
    isShowDetail: false,
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
    addVideoId: (state, action) => {
      state.videoId = action.payload;
    },
    openDetail: (state) => {
      state.isShowDetail = true;
    },
    closeDetail: (state) => {
      state.isShowDetail = false;
    },
  },
});

export default moviesCacheSlice.reducer;
export const {
  addVideoDetailsCache,
  addVideosCache,
  addVideoId,
  closeDetail,
  openDetail,
} = moviesCacheSlice.actions;
