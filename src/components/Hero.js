import React from "react";
import Navbar from "./navbar";

function Hero(props) {
  return (
    <>
      <div className="bg-black pb-32">
        <Navbar />
        <h1 className="text-white text-center text-5xl font-bold mt-20">
          {props.title}
        </h1>
      </div>
    </>
  );
}

export default Hero;
