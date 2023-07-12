import React from "react";
// import Carousel1 from "../Carousel/Carousel";
import Carousel2 from "../Carousel/Carousel";
import Hero from "../Hero/Hero";
import "./Home.scss";
import Gallery from "../gallery/Gallery";
import Team from "../team/Team";
import TagLine from "../TagLine/TagLine";
import HeaderSwiper from "../Headerswiper/HeaderSwiper";

function Home() {
  return (
    <div className="Home">
      <Carousel2 />
      {/* <ViewSlider /> */}
      <TagLine />
      <HeaderSwiper />
      <Gallery />
      <Team />
    </div>
  );
}

export default Home;
