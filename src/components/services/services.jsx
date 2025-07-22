import React from 'react';
import './services.css';
import { FaArrowRight } from 'react-icons/fa';  // Importing an arrow icon from react-icons

const Services = () => {
  return (
    <div className='services'>
      {/* Content Section with Titles and Descriptions */}
      <div className="services-details">
        <div className="services-item">
          <div className="services-top-bar">
            <div className="services-number">
              <h1>01</h1>
            </div>
            <div className="services-arrow">
              <FaArrowRight className="arrow-icon" />
            </div>
          </div>
          <h2>Web Design</h2>
          <p>Web development is the process of building and programming websites with user-friendly designs that are fully responsive.</p>
        </div>

        <div className="services-item">
          <div className="services-top-bar">
            <div className="services-number">
              <h1>02</h1>
            </div>
            <div className="services-arrow">
              <FaArrowRight className="arrow-icon" />
            </div>
          </div>
          <h2>Graphics Design</h2>
          <p>Graphic design involves creating visual content to communicate messages through typography, imagery, color, and form.</p>
        </div>

        <div className="services-item">
          <div className="services-top-bar">
            <div className="services-number">
              <h1>03</h1>
            </div>
            <div className="services-arrow">
              <FaArrowRight className="arrow-icon" />
            </div>
          </div>
          <h2>App Design</h2>
          <p>App design involves the user interface (UI) and user experience (UX) of mobile applications to make them intuitive and engaging.</p>
        </div>

        <div className="services-item">
          <div className="services-top-bar">
            <div className="services-number">
              <h1>04</h1>
            </div>
            <div className="services-arrow">
              <FaArrowRight className="arrow-icon" />
            </div>
          </div>
          <h2>SEO Optimization</h2>
          <p>SEO Optimization ensures that your website ranks higher on search engines, making it easier for people to find your services.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
