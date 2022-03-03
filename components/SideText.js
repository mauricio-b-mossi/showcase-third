import React from "react";
import { motion } from "framer-motion";

// Declaring animations:
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

// Component accepts a props object with the following properties:
// - sideText: the text to be shown in the side of the landing page links
const SideText = ({ sideText }) => {
  return (
    <motion.div
      variants={parent}
      initial="initial"
      animate="animate"
      className="text-xxs md:text-xms   text-white ml-8 max-w-small-box"
    >
      {/* Separates sideText into letters <motion.span/> */}
      {[...sideText].map((letter, key) => (
        <motion.span variants={letterUp} key={key}>
          {letter}
        </motion.span>
      ))}
      
    </motion.div>
  );
};

export default SideText;

