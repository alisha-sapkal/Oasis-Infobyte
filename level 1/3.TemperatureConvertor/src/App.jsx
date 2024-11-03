// src/App.jsx
import React from 'react';
import Converter from './components/Converter';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Temperature Converter</h1>
      <Converter />
    </div>
  );
}

export default App;
