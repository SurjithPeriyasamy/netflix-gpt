import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) return null;
  return (
    <div className="bg-black bg-opacity-60 mt-5 p-5 w-full">
      {movieNames.map((movieName, index) => (
        <MovieList
          title={movieName}
          key={movieName}
          movies={movieResults[index]}
        />
      ))}
    </div>
  );
};

export default GPTMovieSuggestions;
