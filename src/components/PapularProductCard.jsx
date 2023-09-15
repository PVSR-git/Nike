import React from "react";
import { star } from "../assets/icons";

const PapularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[128px} h-[280px]" />
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
};

export default PapularProductCard;
