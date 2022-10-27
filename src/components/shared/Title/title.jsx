import React from "react";

import "./title.css";

function Title({ title }) {
  return (
    <div className="days-title">
      <span>{title}</span>
      <span className="stroke-text">Training</span>
      <span>Schedule</span>
    </div>
  );
}

export default Title;
