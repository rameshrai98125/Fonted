import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "./Carsusel1.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { axiosClient } from "../utils/axiosClient";

import LoadingBar from "../Loading/Loading";

function Carousel1() {
  const [carouselImages, setCarouselImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State variable to track loading status

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axiosClient.get("/carousel1s?populate=*");
        const fetchedImages = response.data.data;

        const imageUrls = fetchedImages.map((image) => {
          if (
            image.attributes &&
            image.attributes.image &&
            image.attributes.image.data &&
            image.attributes.image.data[0] &&
            image.attributes.image.data[0].attributes &&
            image.attributes.image.data[0].attributes.url
          ) {
            return image.attributes.image.data[0].attributes.url;
          } else {
            return null;
          }
        });

        setCarouselImages(imageUrls.filter((url) => url !== null));
        setIsLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.log("Error fetching image data:", error);
        setIsLoading(false); // Set loading to false in case of an error
      }
    }

    fetchData();
  }, []);

  return (
    <div className="Carousel">
      {isLoading ? ( // Render the loading bar if data is still loading
        <LoadingBar />
      ) : (
        <Carousel
          infiniteLoop
          autoPlay
          showStatus={false}
          showArrows={false}
          interval={2000}
          showThumbs={false}
        >
          {carouselImages.map((imageUrl, index) => (
            <div key={index} className="box">
              <img src={imageUrl} alt={`item${index}`} />
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
}

export default Carousel1;
