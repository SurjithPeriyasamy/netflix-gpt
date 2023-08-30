import React from "react";
import Header from "./Header";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import { useTopRatedMovies } from "../hooks/useTopRatedMovies";
import { useUpcomingMovies } from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GPTSearch from "./GPTSearch";

const Browse = () => {
  const gptView = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div className="w-full">
      <div className="">
        <div className="fixed top-0 z-10 left-0 right-0">
          <Header />
        </div>
        {!gptView ? (
          <>
            <div className="relative z-0">
              <MainContainer />
            </div>
            <div className="">
              <SecondaryContainer />
            </div>
          </>
        ) : (
          <GPTSearch />
        )}
      </div>
    </div>
  );
};

export default Browse;
