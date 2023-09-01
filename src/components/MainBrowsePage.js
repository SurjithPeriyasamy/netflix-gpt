import React from "react";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearch from "./GPTSearch";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import { useTopRatedMovies } from "../hooks/useTopRatedMovies";
import { useUpcomingMovies } from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
const MainBrowsePage = () => {
  const gptView = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      {!gptView ? (
        <>
          <div className="relative z-0">
            <MainContainer />
          </div>
          <div>
            <SecondaryContainer />
          </div>
        </>
      ) : (
        <GPTSearch />
      )}
    </div>
  );
};

export default MainBrowsePage;
