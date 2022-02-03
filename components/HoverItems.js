import React from "react";
import { motion, useCycle } from "framer-motion";

// Component accepts a props object with the following properties:
// - text : the text that will be displayed on the animation
// - position: the position of the link
// - color : the color of the link
const HoverItems = ({ text, position, color }) => {
  const [animation, cycleAnimation] = useCycle("animateHover", "animate");

  const childrenHover = {

    // When the user's mouse is over the component,
    // we want to animate the letters to separate
    // 50px from each other.
    animate: {
      paddingRight: "20px",
      paddingLeft: "20px",
    },

    // Returns items to their original position 
    animateHover: {
      paddingRight: "0px",
      paddingLeft: "0px",
    },
  };

  return (
    <div className={position}>
      <motion.div
        // On hover, select 'animate'
        onHoverStart={() => {
          cycleAnimation(1);
        }}
        // On hover end, select 'animateHover'
        onHoverEnd={() => {
          cycleAnimation(0);
        }}
        className="flex"
      >

        {/* Spreading the text into individual letters */}
        {[...text].map((letter, key) => (
          // Each letter is wrapped in a span
          // The span animates with the value of the animation variables
          <motion.span variants={childrenHover} animate={animation} key={key}>
            {letter}
          </motion.span>
        ))}

      </motion.div>
    </div>
  );
};

export default HoverItems;
