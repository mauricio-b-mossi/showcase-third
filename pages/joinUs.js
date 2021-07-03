import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Slider from "../components/Slider";
import { motion } from "framer-motion";

// const marqueeVariants = {
//   animate: {
//     x: [0, -1270],
//     transition: {
//       x: {
//         repeat: Infinity,
//         repeatType: "loop",
//         duration: 5,
//         ease: "linear",
//       },
//     },
//   },
// };

const JoinUs = () => {
  // controls wether view is shown
  const [isVisible, setIsVisible] = useState(true);

  function AnimationEnds() {
    setIsVisible(true);
  }

  return (
    <div>
      <Head>
        <title>Join Us</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="overflow-x-hidden">
        {/* <Slider trigger={AnimationEnds} /> */}

        {isVisible ? (
          <>
   
            {/* remember the padding 20 */}
            <motion.div className="min-h-screen bg-black grid  md:grid-cols-2 items-center justify-center text-white font-body">
              <div className="flex justify-center items-center h-full w-full bg-red-800">
                <Image src="/artsyBG.jpg" alt="" layout="fill" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="uppercase text-center text-9xl py-16 font-bold">
                  <div>Common</div>
                  <div className="relative transform -translate-y-8">Join</div>
                  <div className="relative transform -translate-y-16">us</div>
                </h1>
                <h3 className="uppercase">You know</h3>
                <p className="max-w-xs text-center">
                  It isnt that difficult, just click the button below and send
                  us yout art.
                </p>
                <div className="relative transform translate-y-16 bg-red-800 px-8 py-2 rounded-md animate-pulse hover:scale-125 active:scale-75 hover:animate-none ">
                  <p>HERE</p>
                  {/*  href="https://wetransfer.com/" */}
                </div>
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

export default JoinUs;
