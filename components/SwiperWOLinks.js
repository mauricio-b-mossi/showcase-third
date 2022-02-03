import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

// Components accepts a props object with the following properties:
// - list: the list of images to be shown inside the swiper
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
        
        {/* Separate each image into <SwiperSlide/> components */}
        {list &&
          list.map((img, index) => (
            <SwiperSlide key={index}>
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
