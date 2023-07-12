import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import data from "../data.json";
import "./Team.scss";

function Team() {
  const data = [
    {
      id: 1,
      image: "../src/asserts/parveen.png",
      name: "Mr. Parveen Kumar",
      description: "Director Architect",
    },
    {
      id: 1,
      image: "../src/asserts/AmarjeetVerma.png",
      name: "Mr. Amarjeet Verma",
      description: "B.Arc",
    },
  ];
  return (
    <div id="work">
      <h2 className="workHaed">Our Team</h2>
      <section className="sectionHaed">
        <article>
          <Carousel
            infiniteLoop
            autoPlay
            showIndicators={false}
            showStatus={false}
            showArrows={false}
            interval={2000}
            showThumbs={false}
          >
            {data.map((item) => {
              const { id, name, image, description } = item;
              return (
                <div key={id} className="workItem">
                  <img src={image} alt="title" />
                  <aside>
                    <h3 className="Name" style={{ color: "black" }}>
                      {name}
                    </h3>
                    <p>{description}</p>
                  </aside>
                </div>
              );
            })}
          </Carousel>
        </article>
      </section>
    </div>
  );
}

export default Team;
