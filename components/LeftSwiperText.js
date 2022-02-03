import React from "react";
import Swiper from "./Swiper";

// Component accepts a props object with the following properties:
//  - title : the title of swiper
//  - description : the description of swiper
//  - images: the images of swiper
export default function LeftSwiperText({ title, description, images }) {

  // Splits the title into words
  const modifiedTitle = title.split(" ");

  return (
    <>
      <div className="hidden lg:block">
        <Swiper list={images.slice(1)} />
      </div>
      <div className="flex flex-col justify-center items-center">

        {/* Display title words */}
        <h1 className="uppercase text-center text-5xl sm:text-7xl  2xl:text-9xl py-4 lg:py-16 font-bold">
          <div>{modifiedTitle[0]}</div>
          <div className="relative transform -translate-y-2 lg:-translate-y-4 2xl:-translate-y-8">
            {modifiedTitle[1]}
          </div>
        </h1>

        <div className="max-w-lg relative transform -translate-y-4 lg:-translate-y-8 2xl:-translate-y-16
         text-center py-8 lg:py-0 text-xs md:text-lg">
          <p>{description}</p>
        </div>
      </div>
      <div className="block lg:hidden pb-16">
        <Swiper list={images.slice(1)} />
      </div>
    </>
  );
}
