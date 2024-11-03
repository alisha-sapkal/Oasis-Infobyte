// src/components/TemperatureInput.jsx
import React from 'react';

function TemperatureInput({ temperature, inputUnit, targetUnit, onTemperatureChange, onInputUnitChange, onTargetUnitChange }) {
  return (
    <div className="temperature-input">
      <div>
        <label>Enter Temperature:</label>
        <input
          type="number"
          value={temperature}
          placeholder="Enter temperature"
          onChange={(e) => onTemperatureChange(e.target.value)}
        />
      </div>
      <div>
        <label>Input Unit:</label>
        <select value={inputUnit} onChange={(e) => onInputUnitChange(e.target.value)}>
          <option value="celsius">Celsius (°C)</option>
          <option value="fahrenheit">Fahrenheit (°F)</option>
          <option value="kelvin">Kelvin (K)</option>
        </select>
      </div>
      <div>
        <label>Convert To:</label>
        <select value={targetUnit} onChange={(e) => onTargetUnitChange(e.target.value)}>
          <option value="celsius">Celsius (°C)</option>
          <option value="fahrenheit">Fahrenheit (°F)</option>
          <option value="kelvin">Kelvin (K)</option>
        </select>
      </div>
    </div>
  );
}

export default TemperatureInput;
