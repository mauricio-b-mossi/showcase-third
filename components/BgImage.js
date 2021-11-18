import React from 'react'
import Image from "next/image";


export default function BgImage({image}) {
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
