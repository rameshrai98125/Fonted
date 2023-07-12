import React, { useState } from "react";
import { Image } from "antd";
// import images from "../../projectView.json";

import "./ViewProject.scss";

function ViewProject() {
  const [visible, setVisible] = useState(false);

  const images = [
    {
      id: 1,
      title: "Project 1",
      description: "Hello ",
      image:
        "https://res.cloudinary.com/dhw7yagba/image/upload/v1688375154/p1_e29a09fe83.jpg",
      url1: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688375155/p2_be79ea91ad.jpg",
      url2: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688375153/p3_12c2c1b8a6.jpg",
    },
    {
      id: 2,
      title: "Project 2",
      description: "This is my second Project",
      image:
        "https://res.cloudinary.com/dhw7yagba/image/upload/v1688375708/11_569756e763.jpg",
      url1: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688375701/12_2a7d5445c6.jpg",
      url2: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688375699/14_f1013934f5.jpg",
    },
    {
      id: 3,
      title: "Project 3",
      description: "This is my third Project",
      image:
        "https://res.cloudinary.com/dhw7yagba/image/upload/v1688376397/G_VIEW_1_44c8d33068.jpg",
      url1: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688376397/G_VIEW_2_f6ee3c379a.jpg",
      url2: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688376396/G_VIEW_3_42a0006593.jpg",
    },
    {
      id: 4,
      title: "Project 4",
      description: "This is my four Project",
      image:
        "https://res.cloudinary.com/dhw7yagba/image/upload/v1688376586/v2_b4e386a70e.jpg",
      url1: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688376582/v1_819b0199e8.jpg",
      url2: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688376584/v3_120990eef2.jpg",
    },
    {
      id: 5,
      title: "Project 5",
      description: "This is my five Project",
      image:
        "https://res.cloudinary.com/dhw7yagba/image/upload/v1688376792/HDBL_1_327bfa018e.jpg",
      url1: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688376792/HDBL_2_dca0ec9600.jpg",
      url2: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688376791/DE_7_ad51b7c180.jpg",
    },
    {
      id: 6,
      title: "Project 6",
      description: "This is my six Project",
      image:
        "https://res.cloudinary.com/dhw7yagba/image/upload/v1688376985/GS_1_7901d0afef.jpg",
      url1: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688376985/GS_3_bb9e5badc1.jpg",
    },
  ];
  return (
    <div className="ViewProject">
      <div className="Project">
        <div className="Project-overlay">
          <h1 className="ProjectHead">Project</h1>
        </div>
      </div>
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
    </div>
  );
}

export default ViewProject;
