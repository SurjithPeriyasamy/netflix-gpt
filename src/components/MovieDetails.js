import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_OPTIONS, IMAGE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  addVideoDetailsCache,
  addVideosCache,
} from "../utils/MoviesCacheSlice";
import LoadingUi from "./LoadingUi";

const MovieDetails = () => {
  const [videos, setVideos] = useState(null);
  const [videoDetails, setVideoDetails] = useState(null);

  const { movid } = useParams();
  const dispatch = useDispatch();

  const detailsCache = useSelector((store) => store.cache.videoDetailsCache);
  const videosCache = useSelector((store) => store.cache.videosCache);

  useEffect(() => {
    if (detailsCache[movid] && videosCache[movid]) {
      setVideoDetails(detailsCache[movid]);
      setVideos(videosCache[movid]);
    } else {
      getMovieDetails();
      getDetailTrailer();
    }
  }, []);

  const getMovieDetails = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movid + "?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addVideoDetailsCache({ [json.id]: json }));
    setVideoDetails(json);
  };

  const getDetailTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movid + "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter((movie) => movie.type === "Trailer");
    dispatch(addVideosCache({ [json.id]: filterData[0] }));
    setVideos(filterData[0]);
  };
  if (!videoDetails) return <LoadingUi />;
  const {
    overview,
    release_date,
    runtime,
    title,
    poster_path,
    homepage,
    tagline,
    genres,
    imdb_id,
    vote_count,
  } = videoDetails;
  return (
    <div className="bg-netflix-background">
      <div className="bg-black bg-opacity-90 flex xl:justify-center">
        <div className="md:mt-24 lg:w-3/4 sm:flex sm:justify-center">
          <div className="px-10 flex flex-col">
            <div>
              <h1 className="font-semibold text-white text-4xl mb-1 sm:text-5xl">
                {title}
              </h1>
              <p className="text-gray-400 font-bold">
                {release_date} ✴️ {(runtime / 60).toFixed(2)} h
              </p>
            </div>
            <div className="flex flex-col-reverse sm:max-h-[500px] sm:items-center sm:flex-row">
              <div className="sm:basis-[26%] h-full basis-32">
                <img
                  className="object-cover w-full h-48 sm:h-full"
                  alt="poster"
                  src={IMAGE_URL + poster_path}
                />
              </div>
              <div className="sm:basis-[74%] px-1">
                {videos && (
                  <div className="w-full">
                    <iframe
                      className="w-full aspect-video"
                      src={
                        "https://www.youtube-nocookie.com/embed/" +
                        videos.key +
                        "?si=WEeDnA5Aduu-Z2Al&amp;rel=0&autoplay=1&mute=1"
                      }
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
            </div>
            <div className="text-white font-semibold pt-2">
              <ul className="flex gap-5 ">
                {genres.map((gen) => (
                  <li
                    key={gen.id}
                    className="border-2 border-gray-500 text-xs sm:text-base py-1 px-3 rounded-full "
                  >
                    {gen.name}
                  </li>
                ))}
              </ul>
              <p className="border-b-2 border-gray-600 py-2">{overview}</p>

              {homepage && (
                <p className="border-b-2 border-gray-600  py-2">
                  Official Page
                  <Link
                    target="_blank"
                    className="text-blue-600 pl-3"
                    to={homepage}
                  >
                    {homepage}
                  </Link>
                </p>
              )}
              <p className="border-b-2 border-gray-600  py-2">
                To see IMDB
                <Link
                  target="_blank"
                  className="text-blue-600 pl-3"
                  to={
                    "https://www.imdb.com/title/" +
                    imdb_id +
                    "/?ref_=chtmvm_t_1"
                  }
                >
                  https://www.imdb.com
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
