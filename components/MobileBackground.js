import React from 'react'
import BackgroundImage from './BackgroundImage';

// Component accepts a props object with the following properties:
// - image: the image of the background
export default function MobileBackground({image}) {
    return (
      <div className="absolute min-h-screen min-w-full bg-black">
        <div className="block md:hidden">
          {image && <BackgroundImage image={image} />}
        </div>
      </div>
    );
}
