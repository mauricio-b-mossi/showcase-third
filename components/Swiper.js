import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image'

// TODO: Add images based on each category only the main Img from sanity


// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

export default function App() {
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
        <SwiperSlide>
          <Image src="/BWBG.jpg" alt="Art Image" width='1600' height='900'  />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/BWBG.jpg" alt="Art Image" width='1600' height='900' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/BWBG.jpg" alt="Art Image" width='1600' height='900' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/BWBG.jpg" alt="Art Image" width='1600' height='900' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/BWBG.jpg" alt="Art Image" width='1600' height='900' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/BWBG.jpg" alt="Art Image" width='1600' height='900' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/BWBG.jpg" alt="Art Image" width='1600' height='900' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/BWBG.jpg" alt="Art Image" width='1600' height='900' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/BWBG.jpg" alt="Art Image" width='1600' height='900' />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
