import React from 'react'
import { motion} from "framer-motion";

// Component accepts a props object with the following properties:
// - text : the text that will be displayed on the animation
const Content = ({text}) => {
   
      return (
        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="max-w-lg text-center text-base md:text-xl">
            {text}
          </div>
        </motion.div>
      );
}
    
export default Content;

