import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "./Carsusel1.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { axiosClient } from "../utils/axiosClient";

function Carousel1() {
  const carouselImag = [
    {
      id: 1,
      url: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688057044/01_4fc209b5c1.jpg",
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688057018/2_ZA_1_4dc06af209.jpg",
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688057028/final_plan_dde16a89af.jpg",
    },
    {
      id: 4,
      url: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688056865/67301606_1312789488890681_1410642881219133440_o_b0d2225acd.jpg",
    },
  ];
  // const [carousel, setCarousel] = useState(null);

  // useEffect(() => {
  //   fetchData();
  // }, []);
  // async function fetchData() {
  //   try {
  //     const carData = await axiosClient.get("carousel1s?populate=*");
  //     setCarousel(carData.data.attributes.image.url);
  //   } catch (error) {
  //     console.log(error);
  //   }

  //   // setCarousel(data.data.attributes.image, url);
  // }

  return (
    <div className="Carousel">
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        interval={2000}
        showThumbs={false}
      >
        {carouselImag.map((item) => {
          return (
            <div key={item.id} className="box">
              <img src={item.url} alt="item2" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Carousel1;
