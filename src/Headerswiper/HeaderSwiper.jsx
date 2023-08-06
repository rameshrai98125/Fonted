import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./HeaderSwiper.css";
import { Autoplay, FreeMode, Pagination } from "swiper";
import { axiosClient } from "../utils/axiosClient";

export default function HeaderSwiper() {
  const [slider, setSlider] = useState([]);

  async function fetchData() {
    try {
      const response = await axiosClient.get("/header-sliders?populate=image");
      const fetchedslider = response.data.data;
      const sliderUrls = fetchedslider.map((slider) => {
        return slider.attributes.image.data[0].attributes.url;
      });
      setSlider(sliderUrls);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

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
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
      >
        {slider.map((url, index) => (
          <SwiperSlide key={index}>
            <img src={url} alt="image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
