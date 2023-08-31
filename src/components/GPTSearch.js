import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { useSelector } from "react-redux";

const GPTSearch = () => {
  const gptResults = useSelector((store) => store.gpt.movieNames);
  return (
    //bg-netflix-background extend in tailwind.config.js
    <div
      className={
        gptResults
          ? " bg-contain bg-repeat-y bg-netflix-background"
          : "h-screen bg-netflix-background"
      }
    >
      <div
        className={
          gptResults
            ? "bg-black bg-opacity-70"
            : "bg-black bg-opacity-70 h-screen"
        }
      >
        <div className="flex flex-col items-center p-2">
          <GPTSearchBar />
          <GPTMovieSuggestions />
        </div>
      </div>
    </div>
  );
};

export default GPTSearch;
