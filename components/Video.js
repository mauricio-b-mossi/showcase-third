import React from 'react'

// Component accepts a props object with the following properties:
//  - video : the video's link/url
export default function Video({video}) {
    return (
      <div className="relative flex  justify-center  items-center w-full 
      py-20">
        <div className="container">
          <iframe className="responsive-iframe" src={video}></iframe>
        </div>
      </div>
    );
}
