import React from "react";
import "./Image.scss";

const Image = ({ image }) => {
  return (
    <div className="image">
      <img src={image.url} alt={image.title} />
      <div className="image__title">{image.title}</div>
    </div>
  );
};

export default Image;
