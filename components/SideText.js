import React from "react";
import { motion, useCycle } from "framer-motion";

const parent = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 4,
    },
  },
};

const letterUp = {
  animate: {
    opacity: [0, 1],
  },
};

const SideText = ({ sideText }) => {
  return (
    <motion.div
      variants={parent}
      initial="initial"
      animate="animate"
      // md:text-xs
      className="text-xxs md:text-xms   text-white ml-8 max-w-small-box"
    >
      {[...sideText].map((letter, key) => (
        <motion.span variants={letterUp} key={key}>
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default SideText;
