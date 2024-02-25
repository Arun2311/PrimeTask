import React from "react";
import fruit from "../../assets/avacado.png";
import "./ProductComp.css";
export default function ProductComp() {
  return (
    <div className="box">
      <div className="fruit">
        <img src={fruit} alt="avacado" />
      </div>
      <div className="description">
        <h1>
          01
          <br />
          <span>Lorem ipsum</span>
          <br />
          dolor sit amet<br></br> consectetur
        </h1>
      </div>
    </div>
  );
}
