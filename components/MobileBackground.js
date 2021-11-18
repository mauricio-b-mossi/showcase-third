import React from 'react'
import BgImage from './BgImage';

export default function MobileBackground({image}) {
    return (
      <div className="absolute min-h-screen min-w-full bg-black">
        <div className="block md:hidden">
          {image && <BgImage image={image} />}
        </div>
      </div>
    );
}
