import React from 'react'

export default function Video({video}) {
    return (
      <div className="relative flex  justify-center  items-center w-full py-20">
        <div className="container">
          <iframe className="responsive-iframe" src={video}></iframe>
        </div>
      </div>
    );
}
