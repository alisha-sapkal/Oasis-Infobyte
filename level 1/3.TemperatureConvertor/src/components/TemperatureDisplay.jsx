// src/components/TemperatureDisplay.jsx
import React from 'react';

function TemperatureDisplay({ result }) {
  return (
    <div className="temperature-display">
      {result ? <p>Converted Temperature: {result}</p> : <p>Please enter a temperature and convert</p>}
    </div>
  );
}

export default TemperatureDisplay;
