import React from 'react'
import BgImage from './BgImage';

export default function BackgroundComponent({image}) {
    return (
      <div className="absolute min-h-screen min-w-full bg-black">
        {image ? (
          <BgImage image={image} />
        ) : (
          <BgImage image={"/BWBG.jpg"} />
        )}
      </div>
    );
}
