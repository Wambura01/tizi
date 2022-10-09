import React from "react";

import Image1 from "../../assets/image1.png";
import Image2 from "../../assets/image2.png";
import Image3 from "../../assets/image3.png";
import Image4 from "../../assets/image4.png";
import tick from "../../assets/tick.png";
import nb from "../../assets/nb.png";
import nike from "../../assets/nike.png";
import adidas from "../../assets/adidas.png";

import "./reasons.css";

function Reasons() {
  return (
    <div className="reasons" id="reasons">
      <div className="left-r">
        <img src={Image1} alt="gym workout" />
        <img src={Image2} alt="gym workout" />
        <img src={Image3} alt="gym workout" />
        <img src={Image4} alt="gym workout" />
      </div>
      <div className="right-r">
        <span>Some reasons </span>
        <div className="">
          <span className="stroke-text">why </span>
          <span>choose us</span>
        </div>
        <div className="details-r">
          <div className="">
            <img src={tick} alt="tick"></img>
            <span>OVER 50 CURATED WORKOUTS</span>
          </div>
          <div className="">
            <img src={tick} alt="tick" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div className="">
            <img src={tick} alt="tick" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div className="">
            <img src={tick} alt="tick" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
        <span
          style={{
            marginTop: "1rem",
            color: "var(--gray)",
            fontWeight: "normal",
          }}
        >
          OUR PARTNERS
        </span>
        <div className="partners">
          <img src={nb} alt="partner" />
          <img src={adidas} alt="partner" />
          <img src={nike} alt="partner" />
        </div>
      </div>
    </div>
  );
}

export default Reasons;
