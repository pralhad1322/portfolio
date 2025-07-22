import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Left side - Contact Form */}
      <div className="contact-form">
        <h2>Let's Work Together</h2>
        <form>
          <div className="input-group">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Phone" required />
          </div>
          <div className="select-group">
           
            <select id="service" required>
              <option value="">Choose a service</option>
              
              <option value="design">Design</option>
              <option value="development">Development</option>
             
            </select>
          </div>
          <textarea placeholder="Message" rows="4" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Right side - Contact Information */}
      <div className="contact-info">
        <div>
          <FontAwesomeIcon icon={faPhone} className="contact-icon" />
          <div>
            <h3>Phone</h3>
            <p>9842415539</p>
          </div>
        </div>
        <div>
          <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
          <div>
            <h3>Email</h3>
            <p>pralhada73@gmail.com</p>
          </div>
        </div>
        <div>
          <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
          <div>
            <h3>Address</h3>
            <p>New Baneshwor, Kathmandu</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
