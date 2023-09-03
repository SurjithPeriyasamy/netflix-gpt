import React from "react";
import { useSelector } from "react-redux";
import { useMovieTrailer } from "../hooks/useMovieTrailer";
const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movies.trailerVideo);

  useMovieTrailer(movieId);
  if (!trailer) return null;
  return (
    <div className="">
      <iframe
        className="w-full aspect-video"
        src={
          "https://www.youtube-nocookie.com/embed/" +
          trailer.key +
          "?si=CSb3DUxCXpNsxo8o&amp;controls=0&playlist=" +
          trailer.key +
          "&rel=0&autoplay=1&showinfo=0&loop=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
