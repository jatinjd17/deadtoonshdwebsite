import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Banner() {
  const [movies, setMovies] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  useState(() => {
    async function fetchData() {
      const request = await axios.get(
        "https://deadtoonshdwebsite.vercel.app/api/getdata"
      );
      // console.log(request.data.results);
      setMovies(request.data.slice(0, 4));
      // console.log(request);
      return request;
    }
    fetchData();
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 3 : prevSlide - 1));
  };

  const nextSlide = () => {
    // console.log(movies);
    setCurrentSlide((prevSlide) => (prevSlide === 3 ? 0 : prevSlide + 1));
  };

  return (
    <div className="pt-20">
      {/* <Carousel responsive={responsive}> */}
      {/* {movies && movies.length > 0 ? (
        <div className="flex flex-row">
          <div className="">
            <button className="text-white" onClick={prevSlide}>
              {"<"}
            </button>
          </div>
          <div className="flex flex-col-reverse md:flex-row p-10">
            <div className="">
              <div className="text-white align-middle text-center lg:mt-52 font-extrabold lg:text-3xl sm:text-base">
                
                <h1 className="md:w-80 ">{movies[currentSlide].title}</h1>
              </div>
            </div>
            <div className="">
              <Image
                className="rounded-2xl 
              bg-gradient-to-r p-[5px] from-[#7928ca] to-[#ff0080]"
                src={`${movies[currentSlide].img}`}
                alt={movies[currentSlide].title}
                width={900}
                height={900}
              />
              <div class="" />
            </div>
          </div>
          <div className="">
            <button className="text-white" onClick={nextSlide}>
              {">"}
            </button>
          </div>
        </div>
      ) : (
        <></>
      )} */}
      {/* </Carousel> */}
      <Carousel className="z-10" responsive={responsive}>
        {movies ? (
          movies.map((movie) => (
            <div
              className="flex flex-col-reverse md:flex-row p-10"
              key={movie.title}
              // onClick={() => handleMovieClick(movie, { title, type })}
            >
              <div className="text-white align-middle text-center lg:mt-52 font-extrabold lg:text-3xl sm:text-base">
                <h1 className="md:w-80 ">{movie.title}</h1>
              </div>
              <div className="">
                <img
                  className="rounded-2xl 
              bg-gradient-to-r p-[5px] from-[#7928ca] to-[#ff0080] "
                  // className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                  src={`${movie.img}`}
                  width={900}
                  height={900}
                  alt="{movie.title}"
                />
              </div>

              {/* </Carousel> */}
            </div>
          ))
        ) : (
          <div className="text-white"></div>
        )}
      </Carousel>
    </div>
  );
}

export default Banner;
