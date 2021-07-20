import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// FIXME: to be able to rehuse I should pass a array param containing the Images
// Example: for the home just send the array of main images where list value = X
// TODO: Add images based on each category only the main Img from sanity

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

export default function App({ list }) {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        className="mySwiper"
      >
        {list &&
          list.map((img) => (
            <SwiperSlide>
              <Image
                src={img.asset.url}
                alt="Art Image"
                width="900"
                height="900"
                key={img.asset._id}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
