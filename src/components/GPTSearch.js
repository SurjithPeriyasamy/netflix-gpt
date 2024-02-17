import React, { useEffect, useRef, useState } from "react";
import GPTSearchBar from "./GPTSearchBar";
import { useDispatch, useSelector } from "react-redux";
import LoadingUi from "./LoadingUi";
import { addOpenAikey } from "../utils/gptSlice";
import language from "../utils/languageConstants";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { closeDetail } from "../utils/MoviesCacheSlice";

const GPTSearch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const openAiKey = useSelector((store) => store.gpt.openAiKey);
  const langKey = useSelector((store) => store.config.lang);
  const aiKey = useRef(null);

  const gptResults = useSelector((store) => store.gpt.movieNames);

  useEffect(() => {
    dispatch(closeDetail());
  }, []);

  return (
    //bg-netflix-background extend in tailwind.config.js
    <div
      className={
        gptResults
          ? "bg-repeat-y bg-netflix-background"
          : "h-screen bg-netflix-background"
      }
    >
      <div className={`bg-black bg-opacity-70 ${!gptResults && "h-screen"}`}>
        <div className="flex flex-col sm:items-center p-2 font-semibold">
          <GPTSearchBar
            error={error}
            setError={setError}
            setLoading={setLoading}
            openAiKey={openAiKey}
          />
          {!openAiKey && (
            <>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (aiKey.current.value !== "") {
                    dispatch(addOpenAikey(aiKey.current.value));
                    setError("");
                  }
                }}
                className="md:w-1/2 sm:w-full mt-6 flex"
              >
                <input
                  ref={aiKey}
                  className="w-3/4 p-2 pl-5 placeholder:tracking-wide placeholder:font-semibold rounded-l-full focus:outline-none"
                  type="text"
                  placeholder={language[langKey].enterKeyPlaceHolder}
                />
                <button className="w-1/4 bg-green-400 font-bold rounded-r-full">
                  {language[langKey].enterKey}
                </button>
              </form>
              <p className="text-white font-bold shadow-lg rounded-lg p-2 animate-pulse bg-red-700">
                {language[langKey].getKey}
                <a
                  className="underline italic ml-1"
                  target="_blank"
                  href="https://platform.openai.com/"
                  rel="noreferrer"
                >
                  {language[langKey].click}
                </a>
              </p>
            </>
          )}
          {loading ? <LoadingUi /> : <GPTMovieSuggestions />}
        </div>
      </div>
    </div>
  );
};

export default GPTSearch;
