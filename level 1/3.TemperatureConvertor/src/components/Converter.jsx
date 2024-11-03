// src/components/Converter.jsx
import React, { useState } from 'react';
import TemperatureInput from './TemperatureInput';
import TemperatureDisplay from './TemperatureDisplay';

function Converter() {
  const [temperature, setTemperature] = useState('');
  const [inputUnit, setInputUnit] = useState('celsius');
  const [targetUnit, setTargetUnit] = useState('fahrenheit');
  const [convertedTemperature, setConvertedTemperature] = useState(null);

  const handleConvert = () => {
    const temp = parseFloat(temperature);
    if (isNaN(temp)) return;

    let result;
    if (inputUnit === 'celsius' && targetUnit === 'fahrenheit') {
      result = `${((temp * 9) / 5 + 32).toFixed(2)} °F`;
    } else if (inputUnit === 'fahrenheit' && targetUnit === 'celsius') {
      result = `${(((temp - 32) * 5) / 9).toFixed(2)} °C`;
    } else if (inputUnit === 'celsius' && targetUnit === 'kelvin') {
      result = `${(temp + 273.15).toFixed(2)} K`;
    } else if (inputUnit === 'kelvin' && targetUnit === 'celsius') {
      result = `${(temp - 273.15).toFixed(2)} °C`;
    } else if (inputUnit === 'fahrenheit' && targetUnit === 'kelvin') {
      result = `${(((temp - 32) * 5) / 9 + 273.15).toFixed(2)} K`;
    } else if (inputUnit === 'kelvin' && targetUnit === 'fahrenheit') {
      result = `${(((temp - 273.15) * 9) / 5 + 32).toFixed(2)} °F`;
    } else {
      result = `${temp.toFixed(2)} ${inputUnit === 'celsius' ? '°C' : inputUnit === 'fahrenheit' ? '°F' : 'K'}`;
    }

    setConvertedTemperature(result);
  };

  return (
    <div className="converter">
      <TemperatureInput 
        temperature={temperature}
        inputUnit={inputUnit}
        targetUnit={targetUnit}
        onTemperatureChange={setTemperature}
        onInputUnitChange={setInputUnit}
        onTargetUnitChange={setTargetUnit}
      />
      <button onClick={handleConvert} className="convert-button">
        Convert
      </button>
      <TemperatureDisplay result={convertedTemperature} />
    </div>
  );
}

export default Converter;
