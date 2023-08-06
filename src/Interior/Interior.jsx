import React, { useEffect, useState } from "react";
import { axiosClient } from "../utils/axiosClient";
import "./Interior.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Interior = () => {
  const [galleries, setGalleries] = useState([]);

  async function fetchData() {
    try {
      const response = await axiosClient.get("/interiors?populate=image");
      const fetchedGalleries = response.data.data;
      const galleryUrls = fetchedGalleries.map((gallery) => {
        return gallery.attributes.image.data.attributes.url;
      });
      setGalleries(galleryUrls);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    AOS.init({ durations: 2000 });
    AOS.refresh();
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="gallery">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,288L0,32L1440,32L1440,0L0,0L0,0Z"
        ></path>
      </svg>
      <h4 data-aos="fade-down">Interior</h4>
      <div className="container grid grid-three-column">
        {galleries.map((url, index) => (
          <div key={index} className="card">
            <figure data-aos="fade-down" className="Image-figure">
              <img src={url} alt="cc" />
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interior;
