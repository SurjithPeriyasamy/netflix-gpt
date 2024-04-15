import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useFetchMovies } from "../hooks/useFetchMovies";
import { useDispatch } from "react-redux";
import { closeUserIcon } from "../utils/userSlice";
const Browse = () => {
  useFetchMovies("now_playing", "nowPlayingMovies");
  useFetchMovies("popular", "popularMovies");
  useFetchMovies("top_rated", "topRatedMovies");
  useFetchMovies("upcoming", "upcomingMovies");
  const dispatch = useDispatch();
  return (
    <div className="w-full">
      <div className="lg:fixed bg-black lg:bg-transparent top-0 z-50 left-0 right-0">
        <Header />
      </div>
      <div onClick={() => dispatch(closeUserIcon())}>
        <Outlet />
      </div>
    </div>
  );
};

export default Browse;
