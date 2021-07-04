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
  const constraintsRef = useRef(null);

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
            <motion.div
              ref={constraintsRef}
              className="min-h-screen bg-black flex flex-col items-center justify-center text-white p-20 font-body"
            >
              {/* bg-black-white bg-cover bg-center */}
              <div className="relative flex justify-center bg-black items-center w-full h-screen ">
                {/* Changed */}
                <Image
                  className="h-full w-full object-cover opacity-80"
                  src="/BWBG.jpg"
                  alt=""
                  layout="fill"
                />
                <h1 className="absolute text-xxl font-bold uppercase">About</h1>
              </div>
              <div className="p-24 flex justify-center items-center text-xxl text-white">
                <div className="h-96 w-60 block">
                  <DraggableImage
                    style={"h-96 w-60 object-cover absolute"}
                    src={"/BWBG.jpg"}
                    constrain={constraintsRef}
                  />
                  <DraggableImage
                    style={"h-96 w-60 object-cover absolute"}
                    src={"/BWBG.jpg"}
                    constrain={constraintsRef}
                  />
                  <DraggableImage
                    style={"h-96 w-60 object-cover absolute"}
                    src={"/BWBG.jpg"}
                    constrain={constraintsRef}
                  />
                </div>
              </div>
              <motion.div className=" bg-black grid  md:grid-cols-2 items-center justify-center text-white font-body">
                <div className="flex justify-center items-center h-full w-full text-3xl font-thin ">
                  {/* <img src="./artsyBG.jpg" alt="" /> */}
                  <p>{vision}</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="uppercase text-center text-9xl py-16 font-bold">
                    <div>Our</div>
                    <div className="relative transform -translate-y-8">
                      Mission
                    </div>
                    <div className="relative transform -translate-y-16">
                      {/* We? */}
                    </div>
                  </h1>
                </div>
              </motion.div>
              <motion.div className="bg-black grid  md:grid-cols-2 items-center justify-center text-white font-body">
                <div className="flex flex-col justify-center items-center">
                  <h1 className="uppercase text-center text-9xl py-16 font-bold">
                    <div>Our</div>
                    <div className="relative transform -translate-y-8">
                      Vision
                    </div>
                    <div className="relative transform -translate-y-16">
                      {/* We? */}
                    </div>
                  </h1>
                </div>
                <div className="flex justify-center items-center h-full w-full text-3xl font-thin ">
                  {/* <img src="./artsyBG.jpg" alt="" /> */}
                  <p>{mission}</p>
                </div>
              </motion.div>
              {/* <div></div> */}
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