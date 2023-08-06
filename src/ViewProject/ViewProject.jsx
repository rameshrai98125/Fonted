// ViewProject.js
import React, { useEffect, useState } from "react";
import { Image } from "antd";
import "./ViewProject.scss";
import { axiosClient } from "../utils/axiosClient";
import LoadingBar from "../Loading/Loading";

function ViewProject() {
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Add a state for loading

  const [images, setImages] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axiosClient.get("/view-projects?populate=*");
      const projectsData = response.data.data;

      const projectImages = projectsData.map((project) => ({
        id: project.id,
        title: project.attributes.title,
        description: project.attributes.description || "",
        image: project.attributes.image1?.data[0]?.attributes?.url || "",
        url1: project.attributes.image2?.data[0]?.attributes?.url || "",
        url2: project.attributes.image3?.data[0]?.attributes?.url || "",
      }));

      console.log(projectImages);

      setImages(projectImages);
      setIsLoading(false); // Data fetching is completed, set loading to false
    } catch (error) {
      console.error("Error fetching images:", error);
      setIsLoading(false); // Handle errors by setting loading to false
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="ViewProject">
      <div className="Project">
        <div className="Project-overlay">
          <h1 className="ProjectHead">Project</h1>
        </div>
      </div>
      {isLoading ? ( // Conditionally render the loading bar
        <LoadingBar />
      ) : (
        <div className="container grid grid-three-column">
          {images.map((item) => {
            const { id, title, description, image, url1, url2 } = item;
            return (
              <div key={id} className="card">
                <Image
                  preview={{ visible: false }}
                  width={400}
                  height={400}
                  src={image}
                  onClick={() => setVisible(true)}
                  style={{ color: "red" }}
                />
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <div style={{ display: "none" }}>
                  <Image.PreviewGroup
                    preview={{
                      visible,
                      onVisibleChange: (vis) => setVisible(vis),
                    }}
                  >
                    <Image src={image} />
                    <Image src={url1} />
                    <Image src={url2} />
                  </Image.PreviewGroup>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ViewProject;
