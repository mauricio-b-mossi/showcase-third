import React from 'react'
import DraggableImage from './DraggableImage'

// Component accepts a props object with the following properties:
// - list: the list of images to be shown inside the slider
const SwipeAbout = ({list}) => {
    return (
      <div className="h-96 w-60 block">

{/* Separate each individual image <DraggableImage/> components */}
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
