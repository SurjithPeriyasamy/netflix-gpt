import React from "react";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import LoadingUi from "./LoadingUi";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return <LoadingUi />;

  const mainMovie = movies[2];

  const { original_title, overview, id } = mainMovie;
  return (
    <div className="">
      <VideoBackground movieId={id} />
      <div className="bg-black bg-opacity-30 w-full aspect-video absolute top-0">
        <VideoTitle title={original_title} overview={overview} movieId={id} />
      </div>
    </div>
  );
};

export default MainContainer;
