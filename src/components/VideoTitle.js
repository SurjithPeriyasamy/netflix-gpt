import React from "react";
import { Link } from "react-router-dom";

const VideoTitle = ({ title, overview, movieId }) => {
  return (
    <div className="mx-10 mt-[13%] sm:mt-[20%] flex flex-col gap-4 font-semibold">
      <h1 className="font-extrabold text-4xl text-white">{title}</h1>
      <p className="hidden md:block md:w-1/2 lg:w-1/3 text-white">{overview}</p>
      <div className="flex gap-5 select-none ">
        <Link to={"/browse/details/" + movieId}>
          <button className="flex items-center md:py-1 bg-white px-3 rounded-sm">
            <img
              className="h-8"
              alt="playButton"
              src="https://cdn.icon-icons.com/icons2/1132/PNG/512/1486348532-music-play-pause-control-go-arrow_80458.png"
            />
            Play
          </button>
        </Link>
        <Link
          className="bg-gray-500 bg-opacity-60 md:py-2 text-white px-3 rounded-sm"
          to={"/browse/details/" + movieId}
        >
          <button className="md:flex gap-2 items-center">
            <div className="border-2 border-white rounded-full h-6 w-6">i</div>
            More Info
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VideoTitle;
