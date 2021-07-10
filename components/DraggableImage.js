import React from "react";
import { motion } from "framer-motion";

// "h-96 w-60 object-cover"
const DraggableImage = ({src, style, alt }) => {
  return (
    <div >
      <motion.img
        drag="x"
        className={style}
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default DraggableImage;
