import React from "react";
import Header from "../Header/header";

import "./hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <div className=""></div>
          <span>The best fitness club in town</span>
        </div>
        <div className="hero-text">
          <div className="">
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div className="">
            <span>Ideal Body</span>
          </div>
          <div className="">
            <span>
              In here, we will help you share and build your ideal body and live
              up your life to the fullest
            </span>
          </div>
        </div>
        <div className="figures">
          <div className="">
            <span>+140</span>
            <span>Expert Coaches</span>
          </div>
          <div className="">
            <span>+978</span>
            <span>Members Joined</span>
          </div>
          <div className="">
            <span>+50</span>
            <span>Fitness Programs</span>
          </div>
        </div>
      </div>
      <div className="right-h">right side</div>
    </div>
  );
}

export default Hero;
