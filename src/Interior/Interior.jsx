// import React, { useState } from "react";
import "./Interior.scss";
// import images from "../../service.json";
const Gallery = () => {
  const images = [
    {
      id: 1,

      url: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688377530/00_cop_dcd2f2547b.jpg",
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688377526/1_65500e01f3.jpg",
    },
    {
      id: 3,

      url: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688377528/2_e71a3e18b6.jpg",
    },
    {
      id: 4,

      url: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688377531/3_8adc427a56.jpg",
    },
    {
      id: 5,

      url: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688377527/4_064ed784a4.jpg",
    },
    {
      id: 6,
      url: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688377526/5_40df72c999.jpg",
    },
    {
      id: 7,
      url: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688377525/7_ed57600683.jpg",
    },
    {
      id: 8,
      url: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688377526/5_40df72c999.jpg",
    },
    {
      id: 9,
      url: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688377531/9_fec52fb8e8.jpg",
    },
    {
      id: 10,
      url: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688378220/4_d1ac25fa32.jpg",
    },
    {
      id: 11,
      url: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688378228/22_5cab709acf.jpg",
    },
    {
      id: 12,
      url: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688378230/15_a480286f0f.jpg",
    },
    {
      id: 13,
      url: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688378229/20_e68c3adde2.jpg",
    },
    {
      id: 14,
      url: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688403992/d5_1_5172e47d14.png",
    },
    {
      id: 15,
      url: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688403955/d5_2_c6900ef624.png",
    },
  ];
  return (
    <div className="gallery">
      <h4>Interior</h4>
      <div className="container grid grid-three-column">
        {images.map((currImg) => {
          const { id, url } = currImg;
          return (
            <div key={id} className="card">
              <figure className="Image-figure">
                <img src={url} alt="cc" />
              </figure>
              {/* <div className="card-data">
                <h3>{title}</h3>
                <p>{description}</p>
              </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
