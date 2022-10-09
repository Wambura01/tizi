import React, { useState } from "react";

import { testimonialsData } from "../../data/testimonialsData";

import LeftArrow from "../../assets/leftArrow.png";
import RightArrow from "../../assets/rightArrow.png";

import "./testimonials.css";

function Testimonials() {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;

  const handleArrowClick = (side) => {
    if (side === "left") {
      selected === 0
        ? setSelected(tLength - 1)
        : setSelected((prev) => prev - 1);
    }
    if (side === "right") {
      selected === tLength - 1
        ? setSelected(0)
        : setSelected((prev) => prev + 1);
    }
  };

  return (
    <div className="testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>
        <span>{testimonialsData[selected].review}</span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}
          </span>
          {" - "}
          {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <div></div>
        <div></div>
        <img src={testimonialsData[selected].image} alt="person" />
        <div className="arrows">
          <img
            onClick={() => handleArrowClick("left")}
            src={LeftArrow}
            alt="arrows"
          />
          <img
            onClick={() => handleArrowClick("right")}
            src={RightArrow}
            alt="arrows"
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
