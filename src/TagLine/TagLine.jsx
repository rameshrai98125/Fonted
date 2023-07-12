import React from "react";
import "./TagLine.scss";
function TagLine() {
  return (
    <div className="TagLine">
      <h2>Welcome to Innovation </h2>
      <p>Architecture is the bridge that connects people and place.</p>
      <p>
        We believe quality and enduring design can transform a place and elevate
        the human experience.
      </p>
      <div className="TagDiv">
        <a href="tel:(+91)6283914571">
          <p className="btn btnCall">Call Me</p>
        </a>
      </div>
    </div>
  );
}

export default TagLine;
