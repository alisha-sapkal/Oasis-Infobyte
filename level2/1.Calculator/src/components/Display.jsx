// src/components/Display.jsx
import React from "react";
import "./Display.css";

const Display = ({ value, calculation }) => {
  return (
    <div className="display">
      <div className="calculation">{calculation}</div>
      <div className="current-input">{value}</div>
    </div>
  );
};

export default Display;
