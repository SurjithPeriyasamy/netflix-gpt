import React from "react";
import { BACKGROUND_IMAGE } from "../utils/constants";
import { useSelector } from "react-redux";
import language from "../utils/languageConstants";

const GPTSearch = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className={"h-screen bg-[url('" + BACKGROUND_IMAGE + "')]"}>
      <div className="bg-black h-screen bg-opacity-70">
        <div className="flex justify-center">
          <form className="bg-black p-5 mt-36 h-fit w-1/2 grid grid-cols-12">
            <input
              className=" col-span-9 p-2 pl-4 rounded-l-md"
              placeholder={language[langKey].searchPlaceholder}
              type="text"
            />
            <button className="col-span-3 font-semibold text-rose-100 bg-pink-600 rounded-r-md">
              {language[langKey].search}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GPTSearch;
