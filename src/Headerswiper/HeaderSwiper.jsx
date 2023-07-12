import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./HeaderSwiper.css";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper";

export default function HeaderSwiper() {
  const swpierImage = [
    {
      id: 1,
      url: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688355598/3_dfc84ecc40.jpg",
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688355692/9_d4d5b0bb8a.jpg",
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688349263/2_21ee9b1c67.webp",
    },
    {
      id: 4,
      url: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688355627/5_b39745bce5.jpg",
    },
    {
      id: 5,
      url: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688355643/7_1185e40f43.jpg",
    },
    {
      id: 6,
      url: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688355691/8_fa72d50358.jpg",
    },
    {
      id: 7,
      url: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688355692/9_d4d5b0bb8a.jpg",
    },
    {
      id: 8,
      url: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688355627/5_b39745bce5.jpg",
    },
    {
      id: 9,
      url: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688349263/2_21ee9b1c67.webp",
    },
  ];
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        speed={300}
        freeMode={true}
        loop={true}
        loopedSlides={20}
        autoplay={true}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
      >
        {swpierImage.map((item) => {
          const { url, title, id } = item;
          return (
            <SwiperSlide key={id}>
              <p>{title}</p>
              <img src={url} alt="image" />
            </SwiperSlide>
          );
        })}
        {/* <SwiperSlide>
          <img
            src="https://plus.unsplash.com/premium_photo-1682778015002-fa5b916a34db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Q0R3dXdYSkFiRXd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1682960016926-73221abba9a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Q0R3dXdYSkFiRXd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1682709846996-f3c895743d37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://plus.unsplash.com/premium_photo-1682075450326-0922b38e694a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1682633287229-127f90b58c2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1682370992900-d2ba92e09d7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQwfENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1682318012756-37fcf90fee8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDYzfENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://plus.unsplash.com/premium_photo-1682075576406-667e38d23245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDY4fENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
