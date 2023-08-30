import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    movies && (
      <div className="p-2">
        <h1 className="text-2xl text-white my-1 font-semibold">{title}</h1>
        <div className="flex overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100">
          <div className="flex gap-3">
            {movies.map((movie) => (
              <MovieCard key={movie.id} posterId={movie.poster_path} />
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default MovieList;
