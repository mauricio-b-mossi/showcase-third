import React from 'react'
import SmallIcon from './SmallIcon';

export default function JoinUsTitle({splitTitle, descriptionTitle, description}) {
    return (
      <div className="relative min-h-screen flex flex-col justify-center items-center">
        <h1 className="relative text-7xl uppercase text-center md:text-9xl py-8  font-bold">
          <div>{splitTitle ? splitTitle[0] : "common"}</div>
          <div className="relative transform -translate-y-4 md:-translate-y-8">
            {splitTitle ? splitTitle[1] : "join"}
          </div>
          <div className="relative transform -translate-y-8  md:-translate-y-16">
            {splitTitle ? splitTitle[2] : "us"}
          </div>
        </h1>

        {/* Text under title */}
        <div>
          <div className="flex flex-col justify-center items-center">
            <h3 className="relative uppercase font-bold">
              {descriptionTitle ? descriptionTitle : "You Know"}
            </h3>
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
