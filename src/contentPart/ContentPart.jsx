import React from "react";
import "./ContentPart.scss";

function ContentPart() {
  return (
    <div className="wrapper">
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <h1 className="hero-heading">AR. Prveen Kumer </h1>
          <p className="hero-para">
            Ar. prveen Architects is the team of specialized Interior designer &
            skilled architects with years of practical expertise in turning
            design concepts into exquisite reality
          </p>
        </div>
        <div className="section-hero-image">
          <figure className="hero-img">
            <img src={heroImg} alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default ContentPart;
