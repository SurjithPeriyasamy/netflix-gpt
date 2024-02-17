import React from "react";
import { useSelector } from "react-redux";
import MovieDetails from "./MovieDetails";

const DetailsPopup = () => {
  const isPopUp = useSelector((store) => store.cache.isShowDetail);
  return (
    <div
      className={`absolute flex items-center justify-center duration-300 ${
        isPopUp ? "z-50 scale-100 top-0 left-0 w-full h-full" : "-z-20 scale-0"
      } duration-500  bg-black bg-opacity-90 `}
    >
      {isPopUp && <MovieDetails />}
    </div>
  );
};

export default DetailsPopup;
