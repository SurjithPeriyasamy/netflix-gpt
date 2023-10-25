import React, { Suspense, lazy, useRef } from "react";
import GPTSearchBar from "./GPTSearchBar";
import { useDispatch, useSelector } from "react-redux";
import LoadingUi from "./LoadingUi";
import { addOpenAikey } from "../utils/gptSlice";
import OpenAI from "openai";

const GPTSearch = () => {
  const dispatch = useDispatch();
  const openAiKey = useSelector((store) => store.gpt.openAiKey);

  const openai = new OpenAI({
    apiKey: openAiKey,
    dangerouslyAllowBrowser: true, // defaults to process.env["OPENAI_API_KEY"]
  });

  const aiKey = useRef(null);
  const GPTMovieSuggestions = lazy(() => import("./GPTMovieSuggestions"));
  const gptResults = useSelector((store) => store.gpt.movieNames);
  return (
    //bg-netflix-background extend in tailwind.config.js
    <div
      className={
        gptResults
          ? "bg-repeat-y bg-netflix-background"
          : "h-screen bg-netflix-background"
      }
    >
      <div
        className={
          gptResults
            ? "bg-black bg-opacity-50"
            : "bg-black bg-opacity-50 h-screen"
        }
      >
        <div className="flex flex-col sm:items-center p-2">
          <GPTSearchBar openAiKey={openAiKey} openai={openai} />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              aiKey !== "" && dispatch(addOpenAikey(aiKey.current.value));
            }}
            className="md:w-1/2 sm:w-full mt-6 flex"
          >
            <input
              ref={aiKey}
              className="w-3/4 p-2 pl-5 placeholder:tracking-wide placeholder:font-semibold rounded-l-full focus:outline-none"
              type="text"
              placeholder="Enter your openAi key for access It"
            />
            <button className="w-1/4 bg-green-400 font-bold rounded-r-full">
              Enter key
            </button>
          </form>
          {!openAiKey && (
            <p className="text-white font-bold shadow-lg rounded-lg p-2 animate-pulse bg-red-700">
              To get Open Ai key{" "}
              <a
                className="underline text-black"
                target="_blank"
                href="https://platform.openai.com/"
              >
                Click Here
              </a>
            </p>
          )}
          <Suspense fallback={<LoadingUi />}>
            <GPTMovieSuggestions />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default GPTSearch;
