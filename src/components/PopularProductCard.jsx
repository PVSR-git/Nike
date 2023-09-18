import React from "react";
import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[128px} h-[280px]" />
      <div
        className="mt-8 flex ml-2
      justify-start gap-2.5"
      >
        <img src={star} alt="rating" width={24} height={24} />
        <p
          className=" font-montserrat tex-xl 
      leading-normal text-slate-gray"
        >
          (4.5)
        </p>
      </div>
      <h3
        className="mt-2 text-2xl leading-normal ml-2
      font-semibold font-palanquin"
      >
        {name}
      </h3>
      <p
        className="mt-2 text-2lx font-montserrat ml-2
       text-coral-red leading-normal "
      >
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
