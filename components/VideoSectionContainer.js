import React from 'react'
import Video from './Video'
import Button from './Button'

// Component accepts a props object with the following properties:
//  - video : the video's link/url
export default function VideoSectionContainer({video}) {
    return (
      <div className="flex flex-col justify-center items-center
       min-h-screen md:h-full  w-screen">
        
        {/* Passes the video url to <Video/> component */}
        <Video video={video} />

        <Button href={"https://wetransfer.com/"} text="WE TRANSFER" />

      </div>
    );
}
