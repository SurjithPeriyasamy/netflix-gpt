import React from "react";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import LoadingUi from "./LoadingUi";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return <LoadingUi />;

  const mainMovie = movies[1];

  const { original_title, overview, id } = mainMovie;
  return (
    <div className="">
      <VideoBackground movieId={id} />
      <div className="bg-black bg-opacity-25 w-full aspect-video absolute top-0">
        <VideoTitle title={original_title} overview={overview} />
      </div>
    </div>
  );
};

export default MainContainer;
