import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
// // import data from "../data.json";
import "./Team.scss";

function Team() {
  return (
    <div id="work">
      <h2 className="workHaed">Our Team</h2>
      <section className="sectionHaed">
        <div className="right">
          <div>
            <h2>Ar. Parveen Verma</h2>
            <p>Director Architect</p>
          </div>
          <div>
            <h2>Ar.Diksha Verma</h2>
            <p>Interior Designer</p>
          </div>
          <div>
            <h2>Ar. Amarjeet Verma</h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
