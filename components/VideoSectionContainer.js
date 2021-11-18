import React from 'react'
import Video from './Video'
import Button from './Button'

export default function VideoSectionContainer({video}) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen md:h-full  w-screen">
        {/* Video */}
        <Video video={video} />

        {/* Button */}
        <Button href={"https://wetransfer.com/"} text="WE TRANSFER" />
      </div>
    );
}
