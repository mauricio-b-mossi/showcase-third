import React from 'react'

export default function MeetTheTeamTitle() {
    return (
      <div className="relative flex flex-col pt-20 md:pt-24 xl:pt-4">
        <div className="block lg:hidden">
          <h1 className="relative text-7xl uppercase text-center md:text-9xl pt-8 pb-0  font-bold ">
            Meet our
          </h1>
          <h1 className="relative text-7xl uppercase text-center md:text-9xl pb-8  font-bold ">
            team.
          </h1>
        </div>
        <div className="hidden lg:block">
          <h1 className="relative text-7xl uppercase text-center md:text-9xl pt-16 pb-8  font-bold ">
            Meet our team.
          </h1>
        </div>
      </div>
    );
}
