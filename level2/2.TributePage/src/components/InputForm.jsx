// src/components/InputForm.jsx
import React, { useState } from 'react';

const InputForm = ({ onFormSubmit }) => {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [achievements, setAchievements] = useState('');
  const [gender, setGender] = useState('Male');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit({ name, birthDate, achievements, gender });
  };

  return (
    <div className="form-container">
      <h2>Enter Details for the Tribute</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Birth Date:
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            required
          />
        </label>
        <label>
          Achievements:
          <textarea
            value={achievements}
            onChange={(e) => setAchievements(e.target.value)}
            required
          />
        </label>
        <label>
          Gender:
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <button type="submit">Create Tribute</button>
      </form>
    </div>
  );
};

export default InputForm;
