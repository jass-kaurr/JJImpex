import React, { useState } from "react";
import ContactForm from "./ContactForm.jsx";
import FeedbackForm from "./FeedbackForm.jsx";

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
