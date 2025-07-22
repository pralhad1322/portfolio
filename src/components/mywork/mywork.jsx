import React, { useState } from 'react';
import './mywork.css';
import Work1 from '../../assets/work1.jpg';
import Work2 from '../../assets/work2.webp';
import Work3 from '../../assets/work3.png';


const servicesData = [
  {
    id: 1,
    title: 'Frontend Project',
    description: 'Web development is the process of building, programming...',
    image: Work1, // Placeholder image URL
    work: 'ReactJs, Css'
  },
  {
    id: 2,
    title: 'Mobile App',
    description: 'Graphics design involves the creation of visual content, programming...',
    image: Work2,
    work: 'ReactJs, NodeJs'
  },
  {
    id: 3,
    title: 'Fullstack Project',
    description: 'App design refers to the process of creating user interfaces for mobile applications...',
    image: Work3,
    work: 'ReactJs, NodeJs, Bootstrap'
  }
];

const Services = () => {
  const [currentService, setCurrentService] = useState(0);

  const handlePrev = () => {
    setCurrentService((prevService) => (prevService === 0 ? servicesData.length - 1 : prevService - 1));
  };

  const handleNext = () => {
    setCurrentService((prevService) => (prevService === servicesData.length - 1 ? 0 : prevService + 1));
  };

  return (
    <div className="services">
      
      <div className="services-slider">
        <div className="services-content">
          <h1 className='num'>{`0${servicesData[currentService].id}`}</h1>
          <h1 className='work-title'>{servicesData[currentService].title}</h1>
          <p className='work-content'>{servicesData[currentService].description}</p>
          <p className='work-detail'>{servicesData[currentService].work}</p>
        </div>

        <div className="services-image">
          <img src={servicesData[currentService].image} alt={servicesData[currentService].title} />
        </div>

        {/* Navigation buttons */}
      </div>
        <div className="services-navigation">
          <button className="arrow-button" onClick={handlePrev}>
            &#8592; {/* Left Arrow */}
          </button>
          <button className="arrow-button" onClick={handleNext}>
            &#8594; {/* Right Arrow */}
          </button>
        </div>
    </div>
  );
};

export default Services;
