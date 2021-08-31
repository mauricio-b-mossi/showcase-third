import React from 'react'
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";


const Content = ({text}) => {
   
      return (
        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* This is the text */}
          <div className="max-w-lg text-center text-base md:text-xl">
            {text}
          </div>
        </motion.div>
      );
}
    
export default Content;

