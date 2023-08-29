import React from "react";
import Header from "./Header";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className="relative z-0">
      <div className="fixed z-10 left-0 right-0">
        <Header />
      </div>
      <div className="absolute z-0 w-full">
        <MainContainer />
      </div>
    </div>
  );
};

export default Browse;
