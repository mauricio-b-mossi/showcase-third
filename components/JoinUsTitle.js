import React from 'react'
import SmallIcon from './SmallIcon';

// Component accepts a props object with the following properties:
// - splitTitle : the main title of the Join Us page
// - descriptionTitle : the description's title of the Join Us page
// - descripton : the description of the Join Us page
export default function JoinUsTitle({splitTitle, descriptionTitle, description}) {
    return (
      <div className="relative min-h-screen flex flex-col justify-center items-center">
        {/* Main Title */}
        <h1 className="relative text-7xl uppercase text-center md:text-9xl py-8  font-bold">
          {/* if splitTitle exists display the [x] word, else default */}
          <div>{splitTitle ? splitTitle[0] : "common"}</div>
          <div className="relative transform -translate-y-4 md:-translate-y-8">
            {splitTitle ? splitTitle[1] : "join"}
          </div>
          <div className="relative transform -translate-y-8  md:-translate-y-16">
            {splitTitle ? splitTitle[2] : "us"}
          </div>
        </h1>

        <div>
          <div className="flex flex-col justify-center items-center">
            {/* Description Title */}
            <h3 className="relative uppercase font-bold">
              {descriptionTitle ? descriptionTitle : "You Know"}
            </h3>

            {/* Description */}
            <p className="relative max-w-xs text-center text-sm font-light">
              {description
                ? description
                : " It isnt that difficult, just click the button below and send us yout art."}
            </p>
          </div>
          <SmallIcon />
        </div>
      </div>
    );
}
