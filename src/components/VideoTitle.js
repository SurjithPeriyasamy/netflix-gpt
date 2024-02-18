import React, { useState } from "react";

const VideoTitle = ({ title, overview, movieId }) => {
  const [moreInfo, setMoreInfo] = useState(true);
  return (
    <div className="mx-10 mt-[13%] sm:mt-[20%] flex flex-col gap-4 font-semibold">
      <h1 className="font-extrabold text-4xl text-white">{title}</h1>
      {moreInfo && (
        <p className="hidden md:block md:w-1/2 xl:w-1/3 text-white">
          {overview}
        </p>
      )}
      <div className="flex gap-5 select-none ">
        <button className="flex items-center md:py-2 bg-white px-3 rounded-sm">
          <img
            className="h-4"
            alt="playButton"
            src="https://cdn-icons-png.flaticon.com/512/27/27223.png?ga=GA1.1.1981107671.1690793904"
          />
          Play
        </button>
        <button
          onClick={() => (moreInfo ? setMoreInfo(false) : setMoreInfo(true))}
          className="hidden md:flex gap-2 items-center bg-gray-500 bg-opacity-60 md:py-2 text-white px-3 rounded-sm"
        >
          <div className="border-2 border-white rounded-full h-6 w-6">i</div>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
