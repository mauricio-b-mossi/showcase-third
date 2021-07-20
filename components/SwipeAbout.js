import React from 'react'
import DraggableImage from './DraggableImage'

const SwipeAbout = ({list}) => {
    return (
      <div className="h-96 w-60 block">
        {list &&
          list.map((img) => (
            <DraggableImage
              style={"h-96 w-60 object-cover absolute z-10"}
                  src={img.asset.url}
                  key = {img.asset._id}
            />
          ))}
      </div>
    );
}

export default SwipeAbout
