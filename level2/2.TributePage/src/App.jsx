// src/App.jsx
import React, { useState } from 'react';
import InputForm from './components/InputForm';
import TributePage from './components/TributePage';
import './index.css';

const App = () => {
  const [personInfo, setPersonInfo] = useState(null);

  // Handler to save form data and toggle view
  const handleFormSubmit = (info) => {
    setPersonInfo(info);
  };

  return (
    <div className="tribute-app">
      {personInfo ? (
        <TributePage personInfo={personInfo} />
      ) : (
        <InputForm onFormSubmit={handleFormSubmit} />
      )}
    </div>
  );
};

export default App;
