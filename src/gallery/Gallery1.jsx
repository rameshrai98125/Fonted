import React, { useEffect, useState } from "react";
import "./Gallery.scss";
import { axiosClient } from "../utils/axiosClient";

const Gallery = () => {
  const [galleries, setGalleries] = useState([]);

  async function fetchData() {
    try {
      const response = await axiosClient.get("/galleries?populate=image");
      const fetchedGalleries = response.data.data;
      const galleryUrls = fetchedGalleries.map((gallery) => {
        return gallery.attributes.image.data[0].attributes.url;
      });
      setGalleries(galleryUrls);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="gallery">
      <h4>Our Recent Project</h4>
      <div className="container grid ">
        {galleries.map((url, index) => (
          <div key={index} className="card">
            <figure className="Image-figure">
              <img src={url} alt="cc" />
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
