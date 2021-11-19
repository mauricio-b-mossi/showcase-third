import React from 'react'
import SwiperWOLinks from './SwiperWOLinks'

export default function ArtistComponent({title, description, images}) {
    return (
      <div className="max-h-screen md:min-h-screen bg-black flex flex-col items-center justify-center text-white font-body py-20 sm:p-10 lg:p-20">
        <div className="grid md:grid-cols-2 min-h-screen justify-center items-center ">
          <div className="flex flex-col justify-center items-center">
            <h1 className="uppercase text-center text-5xl sm:text-7xl lg:text-8xl 2xl:text-9xl  py-4 md:py-16 font-bold">
              <div>{title}</div>
            </h1>
            <div className="max-w-lg relative transform -translate-y-4 lg:-translate-y-8 2xl:-translate-y-16 text-center py-8 md:py-0 text-xl md:text-2xl">
              <p>{description}</p>
            </div>
          </div>
          <div className="pb-16 md:pb-0">
            <SwiperWOLinks list={list} />
          </div>
        </div>
      </div>
    );
}
