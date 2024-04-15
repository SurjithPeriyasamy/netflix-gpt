import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovies } from "../utils/moviesSlice";

export const useFetchMovies = (title, name) => {
  const dispatch = useDispatch();

  const movies = useSelector((store) => store.movies);
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${title}?page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addMovies([name, json.results]));
  };
  useEffect(() => {
    !movies[name] && getNowPlayingMovies();
  }, []);
};
