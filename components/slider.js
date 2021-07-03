import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Slider = ({ trigger }) => {
  const [isSwitching, setisSwitching] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setisSwitching(false), trigger();
    }, 2000);
  }, []);

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {isSwitching && (
          <motion.div
            className="absolute min-h-screen bg-black flex flex-col justify-center items-center inset-0 z-20 overflow-hidden"
            initial={{
              x: "100vw",
            }}
            animate={{
              x: 0,
              transition: {
                duration: 1,
                type: "tween",
              },
            }}
            exit={{
              x: "-100vw",
              transition: {
                duration: 1,
                type: "tween",
              },
            }}
            // className="min-h-screen bg-black flex flex-col justify-center items-center"
          >
            <Image src="/showcase.webp" alt="" layout="fill" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Slider;
