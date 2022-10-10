import React from "react";

import { plansData } from "../../data/plansData";

import whiteTick from "../../assets/whiteTick.png";

import "./plans.css";

function Plans() {
  return (
    <div className="plans-container">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header">
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITH US</span>
      </div>
      <div className="plans">
        {plansData.map((plan, i) => (
          <div key={i} className="plan">
            {plan.icon}
            <span>{plan.name}</span>
            <span>KSh. {plan.price}</span>
            <div className="features">
              {plan.features.map((feature, i) => (
                <div key={i} className="feature">
                  <img src={whiteTick} alt="tick" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div className="">
              <span>See more benefits</span>
            </div>
            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
