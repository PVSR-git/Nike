import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics } from "../constants";

const Hero = () => {
  return (
    <section
      className="w-full m-red-500
       flex xl:flex-row flex-col
  min-h-screen gap-10 max-container "
    >
      <div
        className="relative xl-w-2/5
       flex-col justify-center
        items-start w-full max-xl:padding-x pt-28"
      >
        <p>Our Summer Collections</p>
        <h1>
          <span>The New Arrival</span>
          <br />
          <span>Nike</span>
          Shoes
        </h1>
        <p>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div
          className="flex justify-start
         items-start flex-wrap w-full mt-20"
        >
          {statistics.map((stat, index) => (
            <div key={index} className="flex flex-col px-7 py-5">
              <p>{stat.value}</p>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
