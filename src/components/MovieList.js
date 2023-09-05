import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeGptSearch } from "../utils/gptSlice";
const MovieList = ({ title, movies }) => {
  const dispatch = useDispatch();
  if (!movies) return null;
  return (
    <div className="p-2">
      <h1 className="text-2xl text-white my-1 font-semibold">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-thumb-rounded-lg scrollbar-thin scrollbar-thumb-cyan-500">
        <div className="flex gap-3">
          {movies.map((movie) => (
            <Link
              onClick={() => dispatch(closeGptSearch())}
              key={movie.id}
              to={"/browse/details/" + movie.id}
            >
              <MovieCard posterId={movie.poster_path} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
