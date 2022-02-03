import React from "react";
import { motion } from "framer-motion";

// Component accepts a props object with the following properties:
// - src: the url of the image
// - style: the style of the image
// - alt: the alt text of the image
const DraggableImage = ({ src, style, alt }) => {
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
