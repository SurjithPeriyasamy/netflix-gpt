import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import { useTopRatedMovies } from "../hooks/useTopRatedMovies";
import { useUpcomingMovies } from "../hooks/useUpcomingMovies";
import { useDispatch } from "react-redux";
import { closeUserIcon } from "../utils/userSlice";
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const dispatch = useDispatch();
  return (
    <div className="w-full">
      <div className="md:fixed bg-slate-950 md:bg-transparent top-0 z-50 left-0 right-0">
        <Header />
      </div>
      <div onClick={() => dispatch(closeUserIcon())}>
        <Outlet />
      </div>
    </div>
  );
};

export default Browse;
