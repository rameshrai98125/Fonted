import React, { useEffect } from "react";
import "./BottomToTop.scss";
import { FaArrowUp } from "react-icons/fa";

function BottomToTop() {
  const goToButton = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="BottomToTop">
      <div className="top-btn" onClick={goToButton}>
        <FaArrowUp className="TopIcon" />
      </div>
    </div>
  );
}

export default BottomToTop;
