import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="mx-10 mt-[20%] flex flex-col gap-4 font-semibold">
      <h1 className="font-extrabold text-4xl text-white">{title}</h1>
      <p className="w-1/3 text-white">{overview}</p>
      <div className="flex gap-5">
        <button className="flex items-center py-1 bg-white px-3 rounded-sm">
          <img
            className="h-8"
            alt="playButton"
            src="https://cdn.icon-icons.com/icons2/1132/PNG/512/1486348532-music-play-pause-control-go-arrow_80458.png"
          />
          Play
        </button>
        <button className="flex gap-2 items-center bg-gray-500 bg-opacity-60 py-1 text-white  px-3 rounded-sm">
          <div className="border-2 border-white rounded-full h-6 w-6">i</div>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
