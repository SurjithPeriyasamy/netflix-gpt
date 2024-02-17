import React from "react";
import MovieCard from "./MovieCard";
import { useDispatch } from "react-redux";
import { addVideoId, openDetail } from "../utils/MoviesCacheSlice";

const MovieList = ({ title, movies }) => {
  const dispatch = useDispatch();

  if (!movies) return null;
  return (
    <div className="p-2">
      <h1 className="text-2xl text-white my-1 font-semibold">{title}</h1>
      <div className="overflow-x-scroll scrollbar-thin scrollbar-track-transparent pb-2 scrollbar-thumb-cyan-500">
        <div className="flex gap-10 duration-200">
          {movies.map((movie) => (
            <div
              className="cursor-pointer"
              onClick={() => {
                dispatch(addVideoId(movie.id));
                dispatch(openDetail());
              }}
              key={movie.id}
            >
              <MovieCard posterId={movie.poster_path} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
