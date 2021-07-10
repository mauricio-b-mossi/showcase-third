import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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

const imageAnim = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: [0, 1, 1, 1, 1, 1],
  },
};

const Anim = ({ intro }) => {

  const [isSmall, setIsSmall] = useState(false)

  useEffect(() => {
    if (window.innerWidth >= 640) {
      setIsSmall(true)
    }
    else {
      setIsSmall(false)
    }
    
  }, [])

  return (
    <AnimatePresence>
      {intro && (
        <div className="absolute h-full w-full inset-0 z-10">
          <div className="font-body text-5xl sm:text-9xl  min-h-screen bg-black text-white flex flex-col items-center justify-center uppercase">
            <motion.div
              className="min-h-screen flex flex-col items-center justify-center"
              variants={parentAnim}
              initial="initial"
              animate="animate"
            >
              <motion.div
                variants={childAnim}
                className="absolute"
                initial={{}}
              >
                Welcome
              </motion.div>
              <motion.div variants={childAnim} className="absolute">
                To
              </motion.div>
              <motion.div variants={childAnim} className="absolute">
                Showcase
              </motion.div>
              {/* <AnimatePresence> */}

              {isSmall ? (
                <motion.div
                  className="absolute h-img-h w-img-w"
                  variants={imageAnim}
                  exit={{
                    top: "48px",
                    left: "48px",
                    height: "96px",
                    width: "96px",
                    transition: {
                      duration: 2,
                    },
                  }}
                >
                  <Image
                    src="/showcase.webp"
                    alt=""
                    layout="fill"
                    objectFit="contain"
                  />
                </motion.div>
              ) : (
                <motion.div
                  className="absolute h-img-h-sm w-img-w-sm"
                  variants={imageAnim}
                  exit={{
                    top: "16px",
                    left: "16px",
                    height: "80px",
                    width: "80px",
                    transition: {
                      duration: 2,
                    },
                  }}
                >
                  <Image
                    src="/showcase.webp"
                    alt=""
                    layout="fill"
                    objectFit="contain"
                  />
                </motion.div>
              )}

              {/* </AnimatePresence> */}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Anim;
