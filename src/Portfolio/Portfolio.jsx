import React from "react";
import "./Portfolio.scss";
import imagebg from "../asserts/portfolio/SB2.jpg";
import imagebg1 from "../asserts/portfolio/sk1.jpg";
import imagebg2 from "../asserts/portfolio/VIEW 3.jpg";
import imagebg3 from "../asserts/portfolio/06.jpg";
import bgvideo from "../../src/asserts/portfolio/School.mp4";

function Portfolio() {
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
          luxury and beauty.
        </p>
        <p className="Portfolio-content-subheading">
          Depending on the needs of the client, our service model could be
          turnkey, design consultancy, or project management services, and is
          tailored to the client’s tastes and utility. From concept to
          implementation, the solutions are undeniably one-of-a-kind, with a
          special focus on quality and efficiency.
        </p>
      </div>

      <div className="Portfolio-3 gap">
        <h1 className="menuHeading">Industries We Serve</h1>
        <div className="container grid grid-two-column">
          <div className="Portfolio-3-right-part">
            <h2 className="Portfolio-3-head">Commercial Properties</h2>
            <p className="Portfolio-3-heading ">
              The <span>AR. PARVEEN KUMAR</span> Architects team has welcomed
              collaborations with consultants, design professionals, and
              consultants. We are driven by innovation, dedicated to meeting the
              expectations of our clients, and always demonstrating the highest
              degree of commitment to innovative commercial interior
              architecture and design. Furthermore, our professionals are always
              working with the most up-to-date concepts and modules. We take
              great care to ensure that the area is well-structured, the
              furniture is well-designed, the lighting is sufficient, the colors
              are ideal, and the materials are appropriate. Our team of
              qualified experts includes a group of design consultants, creative
              people, design professionals, lighting advisors, etc. who examine
              and evaluate the projected space and the multiple design options
              while keeping in mind the goal and layout concepts for future use.
            </p>
          </div>
          <div className="left-part">
            <figure className="left-img">
              <img src={imagebg} alt="arch" />
            </figure>
          </div>
        </div>
      </div>
      <div className="Portfolio-3">
        <div className="container grid grid-two-column">
          <div className="Portfolio-3-right-part">
            <h2 className="Portfolio-3-head">Residential Properties</h2>
            <p className="Portfolio-3-heading ">
              If you are seeking a dream house with practical or opulent decor,
              the Abhay Agharva Architects team has the finest solutions for
              you. Our team of talented designers can produce eye-catching
              designs that are also functional and user-friendly all at once.
              Today, an ideal home is defined by its interiors. It doesn’t
              matter if one has massive properties, enormous structures, built
              dwellings, or saleable space—the interiors are what really matter
              and provide value to residential projects. We at Abhay Agharva
              Architects can give shape to your dreams if you are investing a
              significant amount of money in your construction project and want
              it to look as flawless as you had dreamed.
            </p>
          </div>
          <div className="left-part">
            <figure className="left-img">
              <img src={imagebg1} alt="arch" />
            </figure>
          </div>
        </div>
      </div>
      <div className="Portfolio-3">
        <div className="container grid grid-two-column">
          <div className="Portfolio-3-right-part">
            <h2 className="Portfolio-3-head">Hospitality Sector</h2>
            <p className="Portfolio-3-heading ">
              The team at Abhay Agharva Architects is renowned for its expertise
              in creating architecture that is both practical and tasteful. We
              are the leading hospitality interior designers and what sets us
              apart is our skill at creating accurate, thorough briefings based
              on the instructions and guidelines provided by our clients, as
              well as our expertise in how to put together the ideal
              accommodation space. Our designs are sophisticated, practical,
              ergonomic, and functional. Whether it’s a resort space that needs
              to be designed and decorated with the goal of attracting customers
              or a hotel space that is to be designed to exhibit its core image,
              principles, values, and vision, we employ the latest trends and
              design conditions to sketch & implement a plan leading to a
              profitable business for our clients
            </p>
          </div>
          <div className="left-part">
            <figure className="left-img">
              <img src={imagebg2} alt="arch" />
            </figure>
          </div>
        </div>
      </div>
      <div className="Portfolio-3">
        <div className="container grid grid-two-column">
          <div className="Portfolio-3-right-part">
            <h2 className="Portfolio-3-head">Schools & Institutions</h2>
            <p className="Portfolio-3-heading ">
              Students visit educational institutions to study, and interior
              design, in our opinion, plays a significant part in promoting that
              learning. We are qualified and experienced to handle interior
              design projects for colleges and universities of all sizes in the
              area. We have earned a reputation as one of the best institutional
              interior designers who work on design-build projects throughout
              the years. Additionally, we constantly adhere to the guidelines
              provided by the relevant authorities while fostering a culture
              that is appreciated by both professors and students. We are
              experts at handling interior design projects for institutions
              since we have a history of creating practical spaces, redesigning
              and decorating institutions, and finishing projects within the
              agreed time frame.
            </p>
          </div>
          <div className="left-part">
            <figure className="left-img">
              <img src={imagebg3} alt="arch" />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
