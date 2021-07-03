import React from "react";
import { motion } from "framer-motion";

// "h-96 w-60 object-cover"
const DraggableImage = ({ constraint, src, style, alt }) => {
  return (
    <div>
      <motion.img
        drag="x"
        dragConstraints={constraint}
        className={style}
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default DraggableImage;
