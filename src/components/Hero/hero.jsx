import React from "react";
import Header from "../Header/header";

import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";

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
        <div className="hero-buttons">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <div className="heart-rate">
          <img src={heart} alt="Heart Rate" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>
        <img src={hero_image} alt="hero" className="hero_image" />
        <img
          src={hero_image_back}
          alt="hero back"
          className="hero_image_back"
        />
        <div className="calories">
          <img src={calories} alt="calories" />
          <div className="">
            <span>Calories Burned</span>
            <span>220kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
