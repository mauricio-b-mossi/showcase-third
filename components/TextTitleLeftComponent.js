import React from 'react'

export default function TextTitleLeftComponent({ title, description }) {
    
    const modifiedTitle = title.split(" ");

    return (
      <div className="bg-black lg:bg-transparent grid  md:grid-cols-2 items-center justify-center text-white font-body">
        <div className="flex flex-col justify-center items-center">
          <h1 className="relative uppercase text-center text-3xl sm:text-7xl lg:text-8xl xl:text-9xl py-4 md:py-16 font-bold">
            <div>{modifiedTitle[0]}</div>
            <div className="relative transform -translate-y-2 lg:-translate-y-4 xl:-translate-y-8">
              {modifiedTitle[1]}
            </div>
            <div className="relative transform -translate-y-4 lg:-translate-y-8 xl:-translate-y-16"></div>
          </h1>
        </div>
        <div className="relative flex justify-center items-center h-full w-full px-4 text-sm md:text-xl  lg:text-2xl xl:text-3xl font-thin max-w-sm md:max-w-none pb-16 md:pb-0">
          <p>{description}</p>
        </div>
      </div>
    );
}
