import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import { useTopRatedMovies } from "../hooks/useTopRatedMovies";
import { useUpcomingMovies } from "../hooks/useUpcomingMovies";
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="w-full">
      <div className="md:fixed bg-slate-950 md:bg-transparent top-0 z-50 left-0 right-0">
        <Header />
      </div>
      <Outlet />
    </div>
  );
};

export default Browse;
