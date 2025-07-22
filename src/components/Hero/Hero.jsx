import React from 'react';
import './Hero.css';
import profile from '../../assets/profile.jpg';

const Hero = () => {
  const openResume = () => {
    // Replace 'resume.pdf' with the actual path to your PDF file
    window.open('public/pralhad-cv.pdf', '_blank');
  };

  return (
    <div className="hero">
      <div className="hero-content">
        <h1><span>I'm Pralhad Adhikari</span></h1>
        <p>Web Developer</p>
        <div className="hero-action">
          <div className="hero-connect">Connect with me</div>
          <div className="hero-resume" onClick={openResume}>
            My Resume
          </div>
        </div>
      </div>

      <div className="image">
        <img src={profile} alt="Profile" />
        <div className="moving-dashed-border"></div>
      </div>
    </div>
  );
};

export default Hero;
