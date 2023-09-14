import React, { useState } from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section className="w-full flex xl:flex-row flex-col  justify-center min-h-screen  max-container">
      <div
        className="relative flex
       flex-col justify-start items-start
         pt-28 pl-3"
      >
        <p
          className="text-xl font-montserrat
       text-coral-red "
        >
          Our Summer Collections
        </p>
        <h1
          className=" mt-10 font-palanquin text-8xl max-sm:text-[24px]
        max-sm:leading-[2]   font-bold"
        >
          <span
            className="xl:bg-white xl:whitespace-nowrap
            relative z-10 "
          >
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span>Shoes
        </h1>
        <p
          className="font-montserrat text-slate-gray
        text-lg leading-8 mt-6 mb-14 sm:max-w-sm"
        >
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div
          className="flex justify-start
         items-start flex-wrap w-full mt-20 gap-12"
        >
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative min-h-screen flex flex-col justify-center items-center bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={620}
          height={500}
          className="object-contain z-10"
        />
        <div className="flex absolute sm:gap-6 gap-4 -bottom-[4%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg=""
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
