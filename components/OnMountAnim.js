import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Defyning animations:

//parentAnim is an animation for the Parent Component
const parentAnim = {
  initial: {
    x: 0,
  },
  animate: {
    transition: {
      staggerChildren: 0.6,
    },
  },
};

//childAnim is an animation for the children of the Parent Component
const childAnim = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: [0, 1, 1, 0],
    transition: {
      duration: 0.5,
      type: "tween",
    },
  },
};

// Animates the initial logo image
const imageAnim = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: [0, 1, 1, 1, 1, 1],
  },
};

// Component accepts a props object with the following properties:
//  - intro : the intro is a boolean that determines whether the intro
//            animation should be played
const Anim = ({ intro }) => {
  // Handles internal state to see wether it animates for Small or large screens
  const [isSmall, setIsSmall] = useState(false);

  // Function calculates window width on page load
  useEffect(() => {
    if (window.innerWidth >= 640) {
      setIsSmall(false);
    } else {
      setIsSmall(true);
    }
  }, []);

  return (
    // Component from FRAMERMOTION library
    <AnimatePresence>

      {/* REMEMBER: intro is a boolean passed as a prop */}
      {intro && (
        <div className="absolute h-full w-full inset-0 z-10">
          <div
            className="font-body text-5xl   min-h-screen bg-black text-white 
          flex flex-col items-center justify-center uppercase"
          >
            {/* Parent/Animation Orchestrator */}
            <motion.div
              className="min-h-screen flex flex-col items-center justify-center"
              variants={parentAnim}
              initial="initial"
              animate="animate"
            >

              {/* ChildText #1 */}
              <motion.div
                variants={childAnim}
                className="absolute"
              >
                Welcome
              </motion.div>

              {/* ChildText #2 */}
              <motion.div variants={childAnim} className="absolute">
                To
              </motion.div>

              {/* ChildText #3 */}
              <motion.div variants={childAnim} className="absolute">
                Showcase
              </motion.div>

              {/* ChildLogo #4 */}
              <motion.div
                className="absolute h-img-h-sm w-img-w-sm"
                variants={imageAnim}
                // Animates the image on EXIT to the absolute position
                exit={
                  isSmall
                    ? {
                        top: "16px",
                        left: "16px",
                        height: "80px",
                        width: "80px",
                        transition: {
                          duration: 2,
                        },
                      }
                    : {
                        top: "48px",
                        left: "48px",
                        height: "96px",
                        width: "96px",
                        transition: {
                          duration: 2,
                        },
                      }
                }
              >
                {/* Logo Image */}
                <Image
                  src="/showcase.webp"
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
              </motion.div>

            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Anim;
