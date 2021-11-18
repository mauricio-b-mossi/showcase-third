import React, { useState, useEffect, useRef } from "react";
import Nav from "../components/Nav";
import { motion } from "framer-motion";
import { sanityClient } from "../sanity";
import SwipeAbout from "../components/SwipeAbout";
import SEOComponent from "../components/SEOComponent";
import BgImage from "../components/BgImage";
import BackgroundComponent from "../components/BackgroundComponent";

const AboutDemo = ({ about }) => {
  const {
    title,
    mission,
    vision,
    reasons,
    video,
    images,
    mainImage,
    mainImageVideo,
    mainImageMVR,
  } = about;

  return (
    <div>
      <SEOComponent title={"About"} />

      <div className="overflow-x-hidden">
        <>
          <Nav />
          <motion.div
            id="bg-b"
            className="min-h-screen  bg-black lg:bg-transparent flex flex-col items-center justify-center text-white  mx-auto font-body "
          >
            <div className="relative flex justify-center  bg-black lg:bg-transparent items-center w-full h-screen  ">
              {mainImage.asset.url ? (
                <div className="lg:hidden">
                  <BgImage image={mainImage.asset.url} />
                </div>
              ) : (
                <div className="lg:hidden">
                  <BgImage image={"/BWBG.jpg"} />
                </div>
              )}
              <h1 className="absolute text-7xl sm:text-9xl lg:text-xxl font-bold uppercase">
                About
              </h1>
            </div>

            <div className="relative flex-col justify-center  bg-black lg:bg-transparent items-center w-full h-auto ">
              <div className="block md:hidden">
                <div className="bg-black lg:bg-transparent"></div>
              </div>
              <div className="relative flex justify-center items-center w-full py-20">
                <div className="container">
                  <iframe className="responsive-iframe" src={video}></iframe>
                </div>
              </div>

              <div className="py-12 md:py-24 flex flex-col md:flex-row justify-center items-center text-2xl relative text-white uppercase">
                <div className="text-sm md:text-xl transform m-4 md:m-0 md:rotate-90 border-b-2 border-t-2   border-white">
                  swipe swipe swipe
                </div>

                <SwipeAbout list={images} />
                <div className="text-sm md:text-xl m-4 md:m-0 transform md:-rotate-90 border-b-2 border-t-2    border-white">
                  swipe swipe swipe
                </div>
              </div>

              <div className="md:p-10 lg:p-20">
                <motion.div className="  bg-black lg:bg-transparent grid  md:grid-cols-2 items-center justify-center text-white font-body">
                  <h1 className="relative pt-20 block md:hidden uppercase text-center text-3xl sm:text-7xl lg:text-8xl xl:text-9xl py-4 md:py-16  font-bold">
                    <div>Our</div>
                    <div className="relative transform -translate-y-2 lg:-translate-y-4 xl:-translate-y-8">
                      Mission
                    </div>
                    <div className="relative transform -translate-y-4 lg:-translate-y-8 xl:-translate-y-16">
                      {/* We? */}
                    </div>
                  </h1>
                  <div className="relative flex justify-center items-center h-full w-full px-4 text-sm md:text-xl  lg:text-2xl xl:text-3xl font-thin max-w-sm md:max-w-none pb-16 md:pb-0">
                    {/* <img src="./artsyBG.jpg" alt="" /> */}
                    <p>{mission}</p>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <h1 className="hidden md:block relative uppercase text-center  sm:text-7xl lg:text-8xl xl:text-9xl py-16 font-bold">
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
                <motion.div className="bg-black lg:bg-transparent grid  md:grid-cols-2 items-center justify-center text-white font-body">
                  <div className="flex flex-col justify-center items-center">
                    <h1 className="relative uppercase text-center text-3xl sm:text-7xl lg:text-8xl xl:text-9xl py-4 md:py-16 font-bold">
                      <div>Our</div>
                      <div className="relative transform -translate-y-2 lg:-translate-y-4 xl:-translate-y-8">
                        Vision
                      </div>
                      <div className="relative transform -translate-y-4 lg:-translate-y-8 xl:-translate-y-16">
                        {/* We? */}
                      </div>
                    </h1>
                  </div>
                  <div className="relative flex justify-center items-center h-full w-full px-4 text-sm md:text-xl  lg:text-2xl xl:text-3xl font-thin max-w-sm md:max-w-none pb-16 md:pb-0">
                    {/* <img src="./artsyBG.jpg" alt="" /> */}
                    <p>{vision}</p>
                  </div>
                </motion.div>
                <motion.div className="  bg-black lg:bg-transparent grid  md:grid-cols-2 items-center justify-center text-white font-body">
                  <h1 className="relative block md:hidden uppercase text-center text-3xl sm:text-7xl lg:text-8xl xl:text-9xl py-4 md:py-16 font-bold">
                    <div>Couple</div>
                    <div className="relative transform -translate-y-2 lg:-translate-y-4 xl:-translate-y-8">
                      Reasons
                    </div>
                    <div className="relative transform -translate-y-4 lg:-translate-y-8 xl:-translate-y-16">
                      {/* We? */}
                    </div>
                  </h1>
                  <div className="relative flex justify-center items-center h-full w-full px-4 text-sm md:text-xl  lg:text-2xl xl:text-3xl font-thin max-w-sm md:max-w-none pb-16 md:pb-0">
                    {/* <img src="./artsyBG.jpg" alt="" /> */}
                    <p>{reasons}</p>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <h1 className="hidden md:block relative uppercase text-center  sm:text-7xl lg:text-8xl xl:text-9xl py-16 font-bold">
                      <div>Couple</div>
                      <div className="relative transform -translate-y-2 lg:-translate-y-4 xl:-translate-y-8">
                        Reasons
                      </div>
                      <div className="relative transform -translate-y-4 lg:-translate-y-8 xl:-translate-y-16">
                        {/* We? */}
                      </div>
                    </h1>
                  </div>
                </motion.div>
              </div>
              {/*  */}
            </div>
            {/* </i> */}
          </motion.div>
        </>
      </div>
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  // export const getServerSideProps = async ({ params }) => {
  const query = `*[_type == "aboutUs"][0]{
    title,
    mainImage{
                    asset->{
                        _id,
                        url
                    }
                },
      mainImageVideo{
                    asset->{
                        _id,
                        url
                    }
                },
                  mainImageMVR{
                    asset->{
                        _id,
                        url
                    }
                },
    mission,
    vision,
    reasons,
    video,
     images[]{
     asset->{
                        _id,
                        url
                    }
  },

  }`;

  const about = await sanityClient.fetch(query);

  return {
    props: {
      about,
    },
  };
};

export default AboutDemo;
