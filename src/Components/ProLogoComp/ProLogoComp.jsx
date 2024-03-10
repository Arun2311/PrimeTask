import React, { useState } from "react";
import line from "../../assets/Line.png";
import hand from "../../assets/hand.png";
import puzzle from "../../assets/puzzle.png";
import mountain from "../../assets/mountain.png";
import climb from "../../assets/climb.png";
import pizza from "../../assets/pizza1.png";
import steths from "../../assets/Stethoscope.png";
import tomato from "../../assets/tomato.png";
import girl from "../../assets/girl.png";
import "./ProLogoComp.css";

const ProLogoComp = () => {
  const [hoveredElement, setHoveredElement] = useState(null);

  const handleMouseEnter = (element) => {
    setHoveredElement(element);
  };

  const handleMouseLeave = () => {
    setHoveredElement(null);
  };

  const getHoveredImage = () => {
    switch (hoveredElement) {
      case "hand":
        return pizza;
    
      case "mountain":
        return tomato;
   
      default:
        return null;
    }
  };
  const getHoveredImageleft = () => {
    switch (hoveredElement) {
      
      case "puzzle":
        return steths;
      
      case "climb":
        return girl;
      default:
        return null;
    }
  };
  return (
    <div className="Main-Box">
       <div className="show-left">
        {hoveredElement && <img src={getHoveredImageleft()} alt="hovered" />}
      </div>
      
      <div className="Box-Container">
        <img src={line} alt="line" />
        <span>Lorem ipsum dolor</span>
      </div>
      <div className="Logo-container">
        <div
          className={`hand ${hoveredElement === "hand" ? "hovered" : ""}`}
          onMouseEnter={() => handleMouseEnter("hand")}
          onMouseLeave={handleMouseLeave}
        >
          <img src={hand} alt="logo" />
          <span className="span-name">Lorem ipsum dolor sit amet consectetur. In.</span>
          <br />
          <br />
        </div>

        <div
          className={`puzzle ${hoveredElement === "puzzle" ? "hovered" : ""}`}
          onMouseEnter={() => handleMouseEnter("puzzle")}
          onMouseLeave={handleMouseLeave}
        >
          <img src={puzzle} alt="logo" />
          <span className="span-name">Lorem ipsum dolor sit amet consectetur. In.</span>
          <br />
          <br />
        </div>

        <div
          className={`mountain ${
            hoveredElement === "mountain" ? "hovered" : ""
          }`}
          onMouseEnter={() => handleMouseEnter("mountain")}
          onMouseLeave={handleMouseLeave}
        >
          <img src={mountain} alt="logo" />
          <span className="span-name">Lorem ipsum dolor sit amet consectetur. In.</span>
          <br />
          <br />
        </div>

        <div
          className={`climb ${hoveredElement === "climb" ? "hovered" : ""}`}
          onMouseEnter={() => handleMouseEnter("climb")}
          onMouseLeave={handleMouseLeave}
        >
          <img src={climb} alt="logo" />
          <span className="span-name">Lorem ipsum dolor sit amet consectetur. In.</span>
          <br />
          <br />
        </div>
      </div>
      <div className="show-right">
        {hoveredElement && <img src={getHoveredImage()} alt="hovered" />}
      </div>
    </div>
  );
};

export default ProLogoComp;
