import React from "react";
import { IMAGE_URL } from "../utils/constants";

const MovieCard = ({ posterId }) => {
  return (
    <>
      {posterId && (
        <div className=" w-[150px]">
          <img
            className="w-full h-auto"
            alt="poster"
            src={IMAGE_URL + posterId}
          />
        </div>
      )}
    </>
  );
};

export default MovieCard;
