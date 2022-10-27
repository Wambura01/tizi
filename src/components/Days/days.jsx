import React from "react";
import { Link, Outlet } from "react-router-dom";
import Title from "../shared/Title/title";

import "./days.css";

function Days() {
  const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  return (
    <div className="days">
      <div className="workouts-header">
        <Title title="Your" />
        <Link to="/">
          <button className="btn">Back</button>
        </Link>
      </div>
      <div className="days-container">
        {days.map((day) => (
          <div key={day} className="day">
            <Link className="link" to={`/day/${day}`}>
              Day {day}
            </Link>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
}

export default Days;
