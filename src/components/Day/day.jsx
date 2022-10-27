import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import "./day.css";

function Day() {
  const [workouts, setWorkouts] = useState([]);
  let { day } = useParams();

  const strippedWorkouts = workouts.slice(0, 15).map(function () {
    return this.splice(Math.floor(Math.random() * this.length), 1)[0];
  }, workouts.slice());

  console.log("Stripped Workouts: ", strippedWorkouts);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_KEY,
        "X-RapidAPI-Host": process.env.REACT_APP_RAPID_HOST,
      },
    };
    const fetchWorkout = () => {
      const url = "https://exercisedb.p.rapidapi.com/exercises";

      fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
          console.log("Data: ", data);
          setWorkouts(data);
        })
        .catch((err) => console.log("ERROR!! ", err));
    };
    fetchWorkout();
  }, []);

  return (
    <div className="workouts">
      <div className="workouts-header">
        <div className="title">Day {day}</div>
        <Link to="/days">
          <button className="btn">Back</button>
        </Link>
      </div>
      <div className="workouts-container">
        <div className="blur workouts-blur-1"></div>
        {strippedWorkouts?.map((workout) => (
          <div key={workout.id} className="workout">
            <div className="gif-container">
              <img src={workout.gifUrl} alt="workout demo" />
            </div>
            <div className="workout-details">
              <p>
                Body Part: <span>{workout.bodyPart}</span>
              </p>
              <p>
                Equipment: <span>{workout.equipment}</span>
              </p>
              <p>
                Workout Name: <span>{workout.name}</span>
              </p>
              <p>
                Target: <span>{workout.target}</span>
              </p>
            </div>
          </div>
        ))}
        <div className="blur workouts-blur-2"></div>
        <div className="blur workouts-blur-3"></div>
      </div>
    </div>
  );
}

export default Day;
