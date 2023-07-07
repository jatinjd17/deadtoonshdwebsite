import React from "react";
// import { useLocation } from "react-router-dom";
import { useRouter } from "next/router";
import Image from "next/image";
// import "../../styles/gradient.module.css";

function Movie() {
  const router = useRouter();
  const data = router.query;
  console.log(data);
  return (
    <div className="bg-black h-full">
      <div className="flex  w-full justify-center ">
        <img
          src={data.img}
          alt="s"
          className="w-full md:w-6/12 lg:rounded-2xl mt-4"
        />
      </div>
      <div className="text-white font-extrabold md:text-xl lg:text-3xl text-center ">
        {data.title}
      </div>
      <div className="text-yellow-500 font-extrabold md:text-xl lg:text-xl text-center mt-8 ">
        Download Links
      </div>
      <div className="flex w-full justify-center cursor-pointer mt-1 lg:mt-8 ">
        <Image
          className="rounded-3xl scale-50 lg:scale-90 hover:scale-75  lg:hover:scale-110 ease-in duration-100"
          src="/megalogo.png"
          width={200}
          height={200}
          alt=""
        />{" "}
      </div>
    </div>
  );
}

export default Movie;
