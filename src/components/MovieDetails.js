import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { API_OPTIONS } from "../utils/constants";

const MovieDetails = () => {
  const [searchParams] = useSearchParams();
  const param = searchParams.get("id");

  const [trailer, setTrailer] = useState(null);
  const [details, setDetails] = useState(null);

  console.log(details);
  useEffect(() => {
    getMovieDetails();
    getDetailTrailer();
  }, []);
  const getMovieDetails = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + param + "?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    setDetails(json);
  };

  const getDetailTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + param + "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter((movie) => movie.type === "Trailer");
    const trailerVideo = filterData[0];
    setTrailer(trailerVideo);
  };

  if (!trailer) return null;
  return (
    <div className="">
      <div className="pt-32  px-20">
        <div className="w-[600px]">
          <iframe
            className="w-full aspect-video"
            src={
              "https://www.youtube-nocookie.com/embed/" +
              trailer.key +
              "?si=WEeDnA5Aduu-Z2Al&amp;controls=0"
            }
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <h1 className="font-bold">{details.title}</h1>
          <Link target="_blank" to="https://www.nohardfeelingsmovie.com">
            Go to Official PAge
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
