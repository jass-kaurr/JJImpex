import React, { useState } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";
const ContactForm = ({ close }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.match(/^\S+@\S+\.\S+$/))
      newErrors.email = "Valid email required";
    if (!form.phone.match(/^[0-9]{10}$/))
      newErrors.phone = "Enter 10 digit phone number";
    if (!form.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setLoading(true);

      // 1️⃣ Save in database
      // await axios.post("http://localhost:5000/api/contact", form);

      const API = import.meta.env.VITE_API_URL;

      await axios.post(`${API}/api/contact`, form);

      // 2️⃣ Send email
      await emailjs.send(
        "service_3v6bck8",
        "template_14aqfdb",
        form,
        "17S-3Wlzk1RdFeigW",
      );

      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
        close();
      }, 2500);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-overlay">
      <div className="premium-modal">
        {success ? (
          <div className="success-animation">
            {/* Accent Ring */}
            <div className="accent-ring"></div>

            {/* SVG Checkmark */}
            <div className="success-icon">
              <svg className="checkmark-svg" viewBox="0 0 52 52">
                <circle
                  className="checkmark-circle"
                  cx="26"
                  cy="26"
                  r="25"
                  fill="none"
                />
                <path
                  className="checkmark-check"
                  fill="none"
                  d="M14 27l7 7 16-16"
                />
              </svg>
            </div>

            <h3>Message Sent Successfully!</h3>

            {/* Progress Line */}
            <div className="progress-bar"></div>

            {/* Subtle Corporate Confetti */}
            <div className="confetti-wrapper">
              {Array.from({ length: 15 }).map((_, i) => (
                <span key={i} className="confetti"></span>
              ))}
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h3>Contact Us</h3>

            <input
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            {errors.name && <span className="error">{errors.name}</span>}

            <input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            {errors.email && <span className="error">{errors.email}</span>}

            <input
              type="text"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}

            <select
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
            >
              <option>General Inquiry</option>
              <option>Bulk Order</option>
              <option>Partnership</option>
              <option>Support</option>
            </select>

            <textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            {errors.message && <span className="error">{errors.message}</span>}

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>

            <button type="button" className="close-btn" onClick={close}>
              Close
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
