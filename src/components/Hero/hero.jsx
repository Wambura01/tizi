import React from "react";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
import { Link } from "react-router-dom";

import Header from "../Header/header";

import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";

import "./hero.css";
import AccountMenu from "../Account/account";

const transition = {
  type: "spring",
  duration: 3,
};

const mobile = window.innerWidth <= 768 ? true : false;
const sessionUser = JSON.parse(localStorage.getItem("user"));

function Hero() {
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "170px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={transition}
          ></motion.div>
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
            <span>
              <NumberCounter end={140} start={100} delay="4" preFix="+" />
            </span>
            <span>Expert Coaches</span>
          </div>
          <div className="">
            <span>
              <NumberCounter end={978} start={100} delay="4" preFix="+" />
            </span>
            <span>Members Joined</span>
          </div>
          <div className="">
            <span>
              <NumberCounter end={50} start={0} delay="4" preFix="+" />
            </span>
            <span>Fitness Programs</span>
          </div>
        </div>
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        {sessionUser ? (
          <AccountMenu />
        ) : (
          <Link className="link" to="/login">
            <button className="btn">Join Now</button>
          </Link>
        )}
        <motion.div
          transition={transition}
          whileInView={{ right: "4rem" }}
          initial={{ right: "-1rem" }}
          className="heart-rate"
        >
          <img src={heart} alt="Heart Rate" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        <img src={hero_image} alt="hero" className="hero_image" />
        <motion.img
          transition={transition}
          whileInView={{ right: "20rem" }}
          initial={{ right: "11rem" }}
          src={hero_image_back}
          alt="hero back"
          className="hero_image_back"
        />
        <motion.div
          transition={transition}
          whileInView={{ right: "28rem" }}
          initial={{ right: "37rem" }}
          className="calories"
        >
          <img src={calories} alt="calories" />
          <div className="">
            <span>Calories Burned</span>
            <span>220kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
