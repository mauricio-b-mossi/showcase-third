import React from 'react'
import BgImage from './BackgroundImage';

// Component accepts a props object with the following properties:
// - image: the background image
export default function BackgroundComponent({image}) {
    return (
      <div className="absolute min-h-screen min-w-full bg-black">
        {/* Conditionally renders passed down or default image*/}
        {image ? (
          // Passed down image
          <BgImage image={image} />
        ) : (
            // Default image
          <BgImage image={"/BWBG.jpg"} />
        )}
      </div>
    );
}
