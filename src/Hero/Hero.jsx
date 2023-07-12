import React from "react";
import "./Hero.scss";
import { Link } from "react-router-dom";
import heroImg from "../../src/asserts/parveen.png";

import Carousel1 from "../Carousel/Carousel";
function Hero() {
  return (
    <div className="wrapper">
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">This is me</p>
          <h1 className="hero-heading">AR. Prveen Kumer </h1>
          <p className="hero-para">
            Ar. prveen Architects is the team of specialized Interior designer &
            skilled architects with years of practical expertise in turning
            design concepts into exquisite reality
          </p>
          <button className="btn hireme-btn">
            <Link className="hire-link" to={"/contact"}>
              Hire me
            </Link>
          </button>
        </div>
        <div className="section-hero-image">
          {/* <Carousel1 /> */}
          <figure className="hero-img">
            <img src={heroImg} alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Hero;
