import React, { useState, useEffect, useRef } from "react";
import Nav from "../components/Nav";
import Head from "next/head";
import Image from "next/image";
import Slider from "../components/Slider";
import { motion } from "framer-motion";
import { sanityClient } from "../sanity";
import DraggableImage from "../components/DraggableImage";

const AboutDemo = ({ about }) => {
  const { title, mission, vision } = about[0];

  console.log(title);

  const [isVisible, setIsVisible] = useState(true);

  function AnimationEnds() {
    setIsVisible(true);
  }

  return (
    <div>
      <Head>
        <title>Main Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="overflow-x-hidden">
        {/* <Slider trigger={AnimationEnds} /> */}

        {isVisible ? (
          <>
            <Nav />
            <motion.div className="min-h-screen bg-black flex flex-col items-center justify-center text-white  md:p-10 lg:p-20 font-body ">
              {/* bg-black-white bg-cover bg-center */}
              <div className="relative flex justify-center bg-black items-center w-full h-screen  ">
                {/* Changed */}
                <Image
                  className="h-full w-full object-cover opacity-80"
                  src="/BWBG.jpg"
                  alt=""
                  // width="1600"
                  // height="900"
                  layout="fill"
                  priority={true}
                />
                <h1 className="absolute text-7xl sm:text-9xl lg:text-xxl font-bold uppercase">
                  About
                </h1>
              </div>
              <div className="py-12 md:py-24 flex flex-col md:flex-row justify-center items-center text-2xl relative text-white uppercase">
                <div className="text-sm md:text-xl transform m-4 md:m-0 md:rotate-90 border-b-2 border-t-2   border-white">
                  swipe swipe swipe
                </div>
                <div className="h-96 w-60 block">
                  <DraggableImage
                    style={"h-96 w-60 object-cover absolute z-10"}
                    src={"/BWBG.jpg"}
                  />
                  <DraggableImage
                    style={"h-96 w-60 object-cover absolute z-10"}
                    src={"/BWBG.jpg"}
                  />
                  <DraggableImage
                    style={"h-96 w-60 object-cover absolute z-10"}
                    src={"/BWBG.jpg"}
                  />
                </div>
                <div className="text-sm md:text-xl m-4 md:m-0 transform md:-rotate-90 border-b-2 border-t-2    border-white">
                  swipe swipe swipe
                </div>
              </div>

              <div className="pb-10 md:p-0">
                <motion.div className=" bg-black grid  md:grid-cols-2 items-center justify-center text-white font-body">
                  <h1 className="block md:hidden uppercase text-center text-3xl sm:text-7xl lg:text-8xl xl:text-9xl py-4 md:py-16 font-bold">
                    <div>Our</div>
                    <div className="relative transform -translate-y-2 lg:-translate-y-4 xl:-translate-y-8">
                      Mission
                    </div>
                    <div className="relative transform -translate-y-4 lg:-translate-y-8 xl:-translate-y-16">
                      {/* We? */}
                    </div>
                  </h1>
                  <div className="flex justify-center items-center h-full w-full px-4 text-sm md:text-xl  lg:text-2xl xl:text-3xl font-thin max-w-sm md:max-w-none pb-16 md:pb-0">
                    {/* <img src="./artsyBG.jpg" alt="" /> */}
                    <p>{vision}</p>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <h1 className="hidden md:block uppercase text-center  sm:text-7xl lg:text-8xl xl:text-9xl py-16 font-bold">
                      <div>Our</div>
                      <div className="relative transform -translate-y-2 lg:-translate-y-4 xl:-translate-y-8">
                        Mission
                      </div>
                      <div className="relative transform -translate-y-4 lg:-translate-y-8 xl:-translate-y-16">
                        {/* We? */}
                      </div>
                    </h1>
                  </div>
                </motion.div>
                <motion.div className="bg-black grid  md:grid-cols-2 items-center justify-center text-white font-body">
                  <div className="flex flex-col justify-center items-center">
                    <h1 className="uppercase text-center text-3xl sm:text-7xl lg:text-8xl xl:text-9xl py-4 md:py-16 font-bold">
                      <div>Our</div>
                      <div className="relative transform -translate-y-2 lg:-translate-y-4 xl:-translate-y-8">
                        Vision
                      </div>
                      <div className="relative transform -translate-y-4 lg:-translate-y-8 xl:-translate-y-16">
                        {/* We? */}
                      </div>
                    </h1>
                  </div>
                  <div className="flex justify-center items-center h-full w-full px-4 text-sm md:text-xl  lg:text-2xl xl:text-3xl font-thin max-w-sm md:max-w-none pb-16 md:pb-0">
                    {/* <img src="./artsyBG.jpg" alt="" /> */}
                    <p>{mission}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        ) : (
          <>
            <div className="min-h-screen bg-black"></div>
          </>
        )}
      </div>
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const query = `*[_type == "aboutUs"]`;

  const about = await sanityClient.fetch(query);

  return {
    props: {
      about,
    },
  };
};

export default AboutDemo;
