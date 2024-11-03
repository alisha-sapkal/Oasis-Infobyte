// src/components/TributePage.jsx
import React from 'react';
import maleImage from '../images/male.png';
import femaleImage from '../images/female.png';

const TributePage = ({ personInfo }) => {
  const { name, birthDate, achievements, gender } = personInfo;
  const profileImage = gender === 'Male' ? maleImage : femaleImage;

  return (
    <div className="tribute-page">
      <header className="header">
        <h1>Tribute to {name}</h1>
        <p>A remarkable {gender.toLowerCase()} who made a lasting impact.</p>
      </header>

      <section className="intro">
        <img
          src={profileImage}
          alt={`${gender} profile`}
          className="profile-image"
        />
        <p>
          {name} was born on {birthDate}. Known for their outstanding contributions and achievements,{' '}
          {gender === 'Male' ? 'he' : gender === 'Female' ? 'she' : 'they'} continues to inspire.
        </p>
      </section>

      <section className="achievements">
        <h2>Achievements</h2>
        <p>{achievements}</p>
      </section>

      <footer className="footer">
        <p>Created with admiration and respect.</p>
      </footer>
    </div>
  );
};

export default TributePage;
