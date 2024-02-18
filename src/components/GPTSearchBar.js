import React, { useState } from "react";
import language from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult, addOpenAikey } from "../utils/gptSlice";
import OpenAI from "openai";

export const GPTSearchBar = ({ error, setError, openAiKey, setLoading }) => {
  const [searchText, setSearchText] = useState(null);

  const langKey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();

  const openai = new OpenAI({
    apiKey: openAiKey,
    dangerouslyAllowBrowser: true, // defaults to process.env["OPENAI_API_KEY"]
  });
  //Search movie from TMDB
  const searchMovieTMDB = async (movieName) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async (e) => {
    e.preventDefault();

    //Make an API call to GPT API and get Movie Results

    const gptQuery =
      "Act as a movie recommendation system and suggest some movies of the query.The query is" +
      searchText +
      ".only give me names of 5 movies,comma seperated like the example result given ahead.Example Result: Jailer,Don,Gadar,Takkar,Money Heist";
    try {
      setLoading(true);
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });
      if (!gptResults.choices) {
        //error
      }
      const gptMovieList = gptResults.choices?.[0]?.message?.content.split(",");

      //Search TMDB Api for each movie
      const promiseArray = gptMovieList.map((movie) => searchMovieTMDB(movie));

      //[promise,promise,promise,promise,promsie]
      const tmdbResults = await Promise.all(promiseArray);
      dispatch(
        addGptMovieResult({
          movieNames: gptMovieList,
          movieResults: tmdbResults,
        })
      );
      setError("");
      setLoading(false);
    } catch (err) {
      dispatch(addOpenAikey(""));
      setLoading(false);
      setError(err.message);
    }
  };
  return (
    <>
      <form
        id="gptsearch"
        onSubmit={handleGptSearchClick}
        className=" p-2 md:mt-36 h-fit md:w-1/2 sm:w-3/4 grid grid-rows-2 sm:grid-rows-none sm:grid-cols-12"
      >
        <input
          value={openAiKey ? searchText : ""}
          onChange={(e) => setSearchText(e.target.value)}
          className=" sm:col-span-9 p-2 pl-4 rounded-l-md focus:outline-none placeholder:text-gray-500"
          placeholder={language[langKey].searchPlaceholder + " ?"}
          type="text"
        />

        <button className="sm:col-span-3 px-3 mx-auto sm:mx-0 sm:place-self-auto font-semibold text-rose-100 bg-pink-600 sm:rounded-r-md">
          {language[langKey].search}
        </button>
      </form>
      {openAiKey && !error ? (
        <div className="bg-green-600 text-white font-semibold px-2 py-1 rounded-b-md">
          Your Key Added Successfully
        </div>
      ) : (
        <div
          className={
            (error && "bg-black") +
            " text-red-500 px-2 py-1 rounded-b-lg md:w-1/2 text-center font-semibold"
          }
        >
          {error}
        </div>
      )}
    </>
  );
};

export default GPTSearchBar;
