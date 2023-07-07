import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

function Rows() {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [swiperRef, setSwiperRef] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        "https://deadtoonshdwebsite.vercel.app/api/getdata"
      );
      // console.log(request.data.results);
      setMovies(request);
      // console.log(request);
      return request;
    }
    fetchData();
  }, []);

  const handleMovieClick = (movie) => {
    nav(`/movie/${movie.title}`, {
      state: {
        movie: movie,
      },
    });
  };

  return (
    <div className="mb-6">
      <div className="text-white ml-3 md:ml-6 mb-2">
        Pokemon <span>See More -{">"}</span>
      </div>
      {/* <Carousel responsive={responsive}></Carousel> */}

      {/* <div className="flex flex-row"> */}
      <Carousel className="z-10 ml-8 md:ml-16" responsive={responsive}>
        {movies ? (
          movies.data.map((movie) => (
            <div
              className="flex flex-col items-center"
              key={movie.title}
              // onClick={() => handleMovieClick(movie)}
            >
              <Link
                href={{
                  pathname: `/movie/${movie.title}`,
                  query: movie, // the data
                }}
              >
                <div className="">
                  <img
                    className="rounded-xl w-40 md:w-52 xl:w-60"
                    // className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    src={`${movie.img}`}
                    // objectFit="cover"

                    // width={200}
                    // height={200}
                    alt="{movie.title}"
                  />
                </div>
                <div>
                  <p className="text-white">
                    {movie.title}
                    {/* <span>{movie.overview}</span> */}
                    {/* <span className="figcaptionspan">
                    IMDB {movie.vote_average} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    {movie.release_date}
                  </span> */}
                  </p>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <></>
        )}
      </Carousel>
      {/* </div> */}
    </div>
  );
}

export default Rows;
