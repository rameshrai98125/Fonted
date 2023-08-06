// // import React, { useState } from "react";
// import { useEffect, useState } from "react";
// import "./Gallery.scss";
// import { axiosClient } from "../utils/axiosClient";
// const Gallery = () => {
//   // const images = [
//   //   {
//   //     id: 1,
//   //     url: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688374670/1_abd4ce5aba.jpg",
//   //   },
//   //   {
//   //     id: 2,
//   //     url: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688374664/2_e5f3a0cc3e.jpg",
//   //   },
//   //   {
//   //     id: 3,
//   //     url: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688374672/3_286b9e7ef0.jpg",
//   //   },
//   //   {
//   //     id: 4,

//   //     url: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688374670/4_0c96d7eb38.jpg",
//   //   },
//   //   {
//   //     id: 5,
//   //     url: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688374669/6_afcdcce485.jpg",
//   //   },
//   //   {
//   //     id: 6,
//   //     url: "https://res.cloudinary.com/dhw7yagba/image/upload/v1688374671/5_63dd771e2b.jpg",
//   //   },
//   //   {
//   //     id: 7,
//   //     url: "https://res.cloudinary.com/dhw7yagba/image/upload/v1689264236/TR_2_4731f2d776.jpg",
//   //   },
//   //   {
//   //     id: 8,
//   //     url: "https://res.cloudinary.com/dhw7yagba/image/upload/v1689264354/DEN_9_99deb1cb8e.png",
//   //   },
//   //   {
//   //     id: 9,
//   //     url: "https://res.cloudinary.com/dhw7yagba/image/upload/v1689264289/JK_28_73d91c1869.jpg",
//   //   },
//   // ];
//   const [galleries, setgalleries] = useState(null);
//   async function fetchData() {
//     try {
//       const photoData = await axiosClient.get("/galleries?populate=image");
//       // setPhoto(photoData.data.data[0].attributes.image.data[0].attributes.url);
//       setgalleries(photoData.data.data);

//       console.log(
//         photoData.data.data[0].attributes.image.data[0].attributes.url
//       );
//     } catch (error) {
//       console.log("This is the eror of gallery", error);
//     }
//   }
//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="gallery">
//       <h4>Our Recent Project</h4>
//       <div className="container grid grid-three-column">
//         {galleries?.map((galleries) => {
//           const [id, title, url] = galleries;
//           return (
//             <div key={id} className="card">
//               <figure className="Image-figure">
//                 <img src={} alt="cc" />
//               </figure>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Gallery;
