import React from "react";
import Image from "./Image";

const PhotoList = ({ photos }) => {
  return (
    <div className="tc flex justify-around flex-wrap">
      {photos.map((lllll, idx) => {
        return (
          <Image
            key={idx}
            id={photos[idx].id}
            url={photos[idx].url}
            name={photos[idx].name}
            email={photos[idx].email}
            info={photos[idx].info}
          />
        );
      })}
    </div>
  );
};
export default PhotoList;
