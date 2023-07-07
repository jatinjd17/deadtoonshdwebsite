import Navbar from "@/components/Navbar/Navbar";
import Banner from "@/components/banner";
import Rows from "@/components/rows";
import Carousel2 from "@/components/slider";
import React from "react";

function Home() {
  return (
    <div className="bg-black">
      <div>
        <Navbar />
        <Banner />
        <Rows />
        <Rows />
        <Rows />
        <Rows />
        {/* <Carousel2 /> */}
      </div>
    </div>
  );
}

export default Home;
