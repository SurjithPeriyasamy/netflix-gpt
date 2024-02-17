import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import DetailsPopup from "./DetailsPopup";
const GPTMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) return null;
  return (
    <div className="relative bg-black bg-opacity-60 mt-5 p-5 w-full">
      {movieNames.map((movieName, index) => (
        <MovieList
          title={movieName}
          key={movieName}
          movies={movieResults[index]}
        />
      ))}
      <DetailsPopup />
    </div>
  );
};

export default GPTMovieSuggestions;
