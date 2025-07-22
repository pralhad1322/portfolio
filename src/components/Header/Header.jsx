import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt,
  faUser,
  faEnvelope,
  faBriefcase,
  faBrain,
  faWrench,
  faPalette,
  faCogs,
} from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import logo from '../../assets/profile.jpg';

const Header = () => {
  return (
    <div className="header">
      <div className="header-top">
        {/* Left: Name and Email */}
        <div className="header-left">
          <img src={logo} alt="Logo" className="header-logo" />
          <div className="username">
            Pralhad <span className="gmail">pralhada73@gmail.com</span>
          </div>
        </div>

        {/* Center: Navigation Menu */}
        <ul className="nav-menu">
          <li>
            <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
          </li>
          
          <li>
            <FontAwesomeIcon icon={faEnvelope} /> Contact
          </li>
          <li>
            <FontAwesomeIcon icon={faBriefcase} /> Resume
          </li>
          <li>
            <FontAwesomeIcon icon={faBrain} /> Skill
          </li>
          <li>
            <FontAwesomeIcon icon={faWrench} /> Works
          </li>
        </ul>

        {/* Right: Theme and Settings */}
        <ul className="nav-bottom">
          <li>
            <FontAwesomeIcon icon={faPalette} /> Theme
          </li>
          <li>
            <FontAwesomeIcon icon={faCogs} /> Settings
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
