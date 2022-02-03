import React from 'react'
import Image from "next/image";

// Component accepts a props object with the following properties:
// - image: the background image
export default function BackgroundImage({image}) {
    return (
      <Image
        className="h-full w-full object-cover opacity-80"
        src={image}
        alt=""
        layout="fill"
        priority={true}
      />
    );
}
