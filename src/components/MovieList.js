import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ title, movies }) => {
  return (
    movies && (
      <div className="p-2">
        <h1 className="text-2xl text-white my-1 font-semibold">{title}</h1>
        <div className="flex overflow-x-scroll scrollbar-thin scrollbar-thumb-cyan-500">
          <div className="flex gap-3">
            {movies.map((movie) => (
              <Link to={"/browse/details?id=" + movie.id}>
                <MovieCard key={movie.id} posterId={movie.poster_path} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default MovieList;
