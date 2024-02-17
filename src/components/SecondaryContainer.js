import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import DetailsPopup from "./DetailsPopup";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black md:h-full">
      <div className="lg:relative lg:-top-44 lg:z-30 xl:-top-60 p-2">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
        <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
        <DetailsPopup />
      </div>
    </div>
  );
};

export default SecondaryContainer;
