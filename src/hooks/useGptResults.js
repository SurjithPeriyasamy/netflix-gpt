// import openai from "../utils/openai";
// import { API_OPTIONS } from "../utils/constants";
// import { addGptMovieResult } from "../utils/gptSlice";
// import { useDispatch } from "react-redux";

// export const useGptResults = async (searchText) => {
//   const dispatch = useDispatch();
//   //Search movie from TMDB
//   const searchMovieTMDB = async (movieName) => {
//     const data = await fetch(
//       "https://api.themoviedb.org/3/search/movie?query=" +
//         movieName +
//         "&include_adult=false&language=en-US&page=1",
//       API_OPTIONS
//     );
//     const json = await data.json();
//     return json.results;
//   };

//   const gptQuery =
//     "Act as a movie recommendation system and suggest some movies of the query" +
//     searchText +
//     ".only give me names of 5 movies,comma seperated like the example result given ahead.Example Result: Jailer,Don,Gadar,Takkar,Money Heist";
//   const gptResults = await openai.chat.completions.create({
//     messages: [{ role: "user", content: gptQuery }],
//     model: "gpt-3.5-turbo",
//   });
//   if (!gptResults.choices) {
//     // Error page
//   }
//   const gptMovieList = gptResults.choices?.[0]?.message?.content.split(",");
//   console.log(gptMovieList);

//   //Search TMDB Api for each movie
//   const promiseArray = gptMovieList.map((movie) => searchMovieTMDB(movie));
//   console.log(promiseArray);

//   //[promise,promise,promise,promise,promsie]
//   const tmdbResults = await Promise.all(promiseArray);
//   console.log(tmdbResults);
//   dispatch(
//     addGptMovieResult({ movieNames: gptMovieList, movieResults: tmdbResults })
//   );
// };
