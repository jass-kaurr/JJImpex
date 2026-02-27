import React, { useState } from "react";
import ContactForm from "./ContactForm.jsx";
import FeedbackForm from "./FeedbackForm.jsx";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const [showContact, setShowContact] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <footer id="contact">

  <div className="footer-container">

    <div className="footer-top">

      <div className="footer-left">
        <div className="quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li>About Us</li>
            <li>Brands</li>
            <li>Contact</li>
          </ul>

        </div>

        <div className="business-details">
          <p>Email: contact@jjimpex.com</p>
          <p>Phone: +91-9876543210</p>
        </div>
      </div>

      <div className="footer-buttons">
        <button className="contact-btn" onClick={() => setShowContact(true)}>
          Contact Us
        </button>
        <button className="feedback-btn" onClick={() => setShowFeedback(true)}>
          Feedback
        </button>
        <a
  href="https://wa.me/+918826411312?text=Hello,%0AI%20am%20reaching%20out%20to%20inquire%20about%20your%20available%20brands%20and%20bulk%20order%20options.%20Please%20let%20me%20know%20the%20next%20steps%20and%20relevant%20details.%0ALooking%20forward%20to%20your%20response."
  target="_blank"
  rel="noopener noreferrer"
  className="whatsapp-btn"
>
  <span className="whatsapp-icon"><FaWhatsapp size={20} /></span>
  Message Us on WhatsApp
</a>
      </div>

    </div>

  </div>

  <div className="footer-bottom">
    © {new Date().getFullYear()} JJImpex. All rights reserved.
  </div>

  {showContact && <ContactForm close={() => setShowContact(false)} />}
  {showFeedback && <FeedbackForm close={() => setShowFeedback(false)} />}

</footer>
  );
};

export default Footer;
