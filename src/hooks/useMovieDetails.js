import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  addVideoDetailsCache,
  addVideosCache,
} from "../utils/MoviesCacheSlice";

export const useMovieDetails = () => {
  const [videos, setVideos] = useState(null);
  const [videoDetails, setVideoDetails] = useState(null);

  const dispatch = useDispatch();

  const {
    videoDetailsCache: detailsCache,
    videosCache,
    videoId,
  } = useSelector((store) => store.cache);

  useEffect(() => {
    if (detailsCache[videoId] && videosCache[videoId]) {
      setVideoDetails(detailsCache[videoId]);
      setVideos(videosCache[videoId]);
    } else {
      getMovieDetails();
      getDetailTrailer();
    }
  }, [videoId]);

  const getMovieDetails = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + videoId + "?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addVideoDetailsCache({ [json.id]: json }));
    setVideoDetails(json);
  };

  const getDetailTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        videoId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((movie) => movie.type === "Trailer");
    dispatch(
      addVideosCache({
        [json.id]: filterData ? filterData[0] : json.results[0],
      })
    );
    setVideos(filterData ? filterData[0] : json.results[0]);
  };
  return { videoDetails, videos };
};
