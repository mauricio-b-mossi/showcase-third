import React from 'react'
import SwipeAbout from "../components/SwipeAbout";

export default function FlowImageComponent({leftText, rightText, images}) {
    return (
      <div className="py-12 md:py-24 flex flex-col md:flex-row justify-center items-center text-2xl relative text-white uppercase">
        <div className="text-sm md:text-xl transform m-4 md:m-0 md:rotate-90 border-b-2 border-t-2   border-white">
          {leftText}
        </div>

        <SwipeAbout list={images} />
        <div className="text-sm md:text-xl m-4 md:m-0 transform md:-rotate-90 border-b-2 border-t-2    border-white">
          {rightText}
        </div>
      </div>
    );
}
