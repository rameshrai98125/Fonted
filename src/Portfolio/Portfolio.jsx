import React, { useEffect, useState } from "react";
import "./Portfolio.scss";
import bgvideo from "../../src/asserts/portfolio/School.mp4";
import { axiosClient } from "../utils/axiosClient";

function Portfolio() {
  const [portfolio, setPortfolio] = useState([]);

  async function fetchData() {
    try {
      const response = await axiosClient.get("/portfolios?populate=*");
      const fetchedData = response.data.data;

      // console.log(fetchedData.gallery.attributes.title);
      const portfolioData = fetchedData.map((item) => {
        return {
          title: item.attributes.title,
          desc: item.attributes.desc,
          imageUrl: item.attributes.image.data[0].attributes.url,
        };
      });
      setPortfolio(portfolioData);
    } catch (error) {
      console.log("This is the error ", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="Portfolio">
        <video autoPlay loop muted className="video">
          <source src={bgvideo} type="video/mp4" />
          <div className="Portfolio-overlay">
            <h1 className="PortfolioHead">Portfolio</h1>
          </div>
        </video>
      </div>

      {/* ********** content */}
      <div className="Portfolio-content">
        <h1 className="Portfolio-content-head">
          We design places for tomorrow!
        </h1>
        <p className="Portfolio-content-subheading">
          Our interior designs, whether they are for residential, commercial,
          retail, or hospitality spaces, focus more on functionality than just
          aesthetics. We make sure that the interiors of a home or workplace are
          uplifting and represent the personalities of those who live or work
          there. The Abhay Agharva Architects team focuses on three objects:
          style, functionality, and innovation. For us, interior design is more
          than just a business; it is our passion to take you to a new world of
          luxury and beauty. Depending on the needs of the client, our service
          model could be turnkey, design consultancy, or project management
          services, and is tailored to the client’s tastes and utility. From
          concept to implementation, the solutions are undeniably one-of-a-kind,
          with a special focus on quality and efficiency.
        </p>
      </div>

      {/* Display portfolio items */}
      {portfolio.map((item, index) => (
        <div key={index} className="Portfolio-3 gap">
          {/* <h1 className="menuHeading">{item.title}</h1> */}
          <div className="container grid grid-two-column">
            <div className="Portfolio-3-right-part">
              <h2 className="Portfolio-3-head">{item.title}</h2>
              <p className="Portfolio-3-heading">{item.desc}</p>
            </div>
            <div className="left-part">
              <figure className="left-img">
                <img src={item.imageUrl} alt={item.title} />
              </figure>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Portfolio;
