import React from "react";

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgURL.bigShoe
          ? "border-coral-red cursor-pointer"
          : "border-transparent"
      } max-sm:flex-1`}
      onClick={handleClick}
    >
      <div
        className="flex justify-center items-center 
       bg-card bg-center bi-covern sm:w-xl sm:h-30 rounded-xl max-sm:p-4"
      >
        <img
          className="object-contain"
          width={100}
          height={100}
          alt="shoe collection"
          src={imgURL.thumbnail}
        />
      </div>
    </div>
  );
};

export default ShoeCard;
