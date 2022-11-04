import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import Title from "../shared/Title/title";
import { Typography } from "@mui/material";

import "./days.css";

const sessionUser = JSON.parse(localStorage.getItem("user"));

console.log("SESSION USER: ", sessionUser);

function Days() {
  const [days, setDays] = useState();

  const partialDays = [1, 2, 3, 4, 5];
  const fullDays = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  useEffect(() => {
    sessionUser.email === "bwambura3314@gmail.com"
      ? setDays(fullDays)
      : setDays(partialDays);
  }, []);

  console.log("DAYS: ", days);

  return (
    <div className="days">
      <div className="workouts-header">
        <Title title="Your" />
        <Link to="/">
          <button className="btn">Back</button>
        </Link>
      </div>
      <div className="days-container">
        {days?.map((day) => (
          <div key={day} className="day">
            <Link className="link" to={`/day/${day}`}>
              Day {day}
            </Link>
          </div>
        ))}
      </div>
      <Typography
        sx={{
          marginTop: "3rem",
          paddingBottom: "5rem",
          color: "white",
          fontSize: "2rem",
          fontStyle: "italic",
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      >
        *** Buy a plan to see workouts for a whole month!! ***
      </Typography>
      <Outlet />
    </div>
  );
}

export default Days;
