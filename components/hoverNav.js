import React from "react";
import { motion, useCycle } from "framer-motion";
import Link from "next/link";

const HoverNav = ({ text, position, color }) => {
  const [animation, cycleAnimation] = useCycle("animateHover", "animate");

  const childrenHover = {
    animate: {
      paddingRight: "5px",
      paddingLeft: "5px",
      originX: 5,
    },
    animateHover: {
      paddingRight: "0px",
      paddingLeft: "0px",
    },
  };

  return (
    <div className={position}>
      <motion.div
        onHoverStart={() => {
          cycleAnimation(1);
        }}
        onHoverEnd={() => {
          cycleAnimation(0);
        }}
        className="flex"
      >
        {[...text].map((letter, key) => (
          <motion.span
            // className="block"
            variants={childrenHover}
            animate={animation}
            key={key}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default HoverNav;
