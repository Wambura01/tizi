import React from "react";

import { programsData } from "../../data/programsData";

import RightArrow from "../../assets/rightArrow.png";

import "./programs.css";
import { Link } from "react-router-dom";

function Programs() {
  return (
    <div className="programs" id="programs">
      <div className="programs-header">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>
      <div className="program-categories">
        {programsData.map((program, i) => (
          <div key={i} className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <Link style={{ textDecoration: "none" }} to="/days">
              <div className="join-now">
                <span>Join Now</span>
                <img src={RightArrow} alt="right arrow" />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Programs;
