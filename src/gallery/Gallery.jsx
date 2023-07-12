// import React, { useState } from "react";
import "./Gallery.scss";
// import images from "../../service.json";
const Gallery = () => {
  const images = [
    {
      id: 1,
      title: "Project 1",
      url: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688374670/1_abd4ce5aba.jpg",
      // description: "This a",
    },
    {
      id: 2,
      title: "Project 2",
      url: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688374664/2_e5f3a0cc3e.jpg",
      // description: "Tjhis sinsgeebnsbsas b sjhd mh",
    },
    {
      id: 3,
      title: "Project 3",
      url: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688374672/3_286b9e7ef0.jpg",
      // description: "This sinsgeebnsbsas b sjhd mh",
    },
    {
      id: 4,
      title: "Project 4",
      url: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688374670/4_0c96d7eb38.jpg",
      // description: "This sinsgeebnsbsas b sjhd mh",
    },
    {
      id: 5,
      title: "Project 5",
      url: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688374669/6_afcdcce485.jpg",
      // description: "This sinsgeebnsbsas b sjhd mh",
    },
    {
      id: 6,
      title: "Project 6",
      url: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688374671/5_63dd771e2b.jpg",
      // description: "Tjhis sinsgeebnsbsas b sjhd mh",
    },
  ];
  return (
    <div className="gallery">
      <h4>Our Recent Project</h4>
      <div className="container grid grid-three-column">
        {images.map((currImg) => {
          const { id, title, url, description } = currImg;
          return (
            <div key={id} className="card">
              <figure className="Image-figure">
                <img src={url} alt="cc" />
              </figure>
              <div className="card-data">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
