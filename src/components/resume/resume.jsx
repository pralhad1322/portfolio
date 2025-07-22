import React, { useState } from 'react';
import './resume.css';


const Resume = () => {
  const [activeSection, setActiveSection] = useState('education');

  const educationContent = (
    <div>
      <h2 className="section-title">My Education</h2>
      <div className="cards-container">
        <div className="card">
          <h3>Bachelor's in Computer Science</h3>
          <p>Ratna Rajya Laxmi Campus (2020-2024)</p>
        </div>
        <div className="card">
          <h3>Higher Secondary Education</h3>
          <p>Columbus College (Completed in 2020)</p>
        </div>
        <div className="card">
          <h3>Secondary Education</h3>
          <p>Shree Krishna Higher Secondary School (Completed in 2017)</p>
        </div>
      </div>
    </div>
  );
  
  const skillsContent = (
    <div>
      <h2 className="section-title">My Skills</h2>
      <div className="cards-container">
        
        <div className="card">
          <img src="src\assets\html.png" alt="HTML" className="logo"/>
          <h3>HTML</h3>
        </div>
        <div className="card">
          <img src="src\assets\css.webp" alt="CSS" className="logo"/>
          <h3>CSS</h3>
        </div>
        <div className="card">
          <img src="src\assets\js.png" alt="JavaScript" className="logo"/>
          <h3>JavaScript</h3>
        </div>
        <div className="card">
          <img src="src\assets\react.png" alt="React" className="logo"/>
          <h3>React</h3>
        </div>
        <div className="card">
          <img src="src\assets\node.webp" alt="Node.js" className="logo"/>
          <h3>Node.js</h3>
        </div>
        <div className="card">
          <img src="src\assets\tale.png" alt="Tailwind" className="logo"/>
          <h3>Tailwind</h3>
        </div>
      </div>
    </div>
  );
  
  
  const aboutMeContent = (
    <div>
      <h2 className="section-title">About Me</h2>
      <div className="about-card">
        <p><strong>Name:</strong> Pralhad Adhikari</p>
        <p><strong>Language:</strong> English, Nepali</p>
        <p><strong>Nationality:</strong> Nepal</p>
        <p><strong>Email:</strong> pralhada73@gmail.com</p>
        <p><strong>Phone:</strong> 9842415539</p>
      </div>
    </div>
  );
  

  return (
    <div className="resume-container">
      {/* Left section */}
      <div className="left-section">
        <h2>Why Hire Me?</h2>
        <p>Passionate and driven, I bring fresh perspectives, a strong work ethic, and a commitment to delivering impactful results
        </p>

        {/* Buttons placed horizontally below "Why Hire Me?" */}
        <div className="button-group">
          <button onClick={() => setActiveSection('education')} className={activeSection === 'education' ? 'active' : ''}>
           My Education
          </button>
          <button onClick={() => setActiveSection('skills')} className={activeSection === 'skills' ? 'active' : ''}>
          My Skills
          </button>
          <button onClick={() => setActiveSection('about')} className={activeSection === 'about' ? 'active' : ''}>
            About Me
          </button>
        </div>
      </div>

      {/* Right section showing content based on the active section */}
      <div className="right-section">
        {activeSection === 'education' && educationContent}
        {activeSection === 'skills' && skillsContent}
        {activeSection === 'about' && aboutMeContent}
      </div>
    </div>
  );
};

export default Resume;
