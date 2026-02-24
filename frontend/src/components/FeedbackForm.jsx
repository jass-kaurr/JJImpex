import React, { useState } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";

const FeedbackForm = ({ close }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    rating: 5,
    comments: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      // 1️⃣ Save to database
      const API = import.meta.env.VITE_API_URL;

      await axios.post(`${API}/api/contact`, formData)
      // await axios.post("http://localhost:5000/api/feedback", form);

      // 2️⃣ Send email
      await emailjs.send(
        "service_3v6bck8",
        "template_tbty15s",
        form,
        "17S-3Wlzk1RdFeigW"
      );

      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
        close();
      }, 2500);

    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-overlay">
      <div className="premium-modal">
        {success ? (
          <div className="success-animation">
            <div className="checkmark"></div>
            <h3>Feedback Submitted Successfully!</h3>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h3>Feedback</h3>

            <input
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              required
            />

            <label>Rating</label>
            <select
              value={form.rating}
              onChange={e => setForm({ ...form, rating: e.target.value })}
            >
              {[5, 4, 3, 2, 1].map(n => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>

            <textarea
              placeholder="Your Comments"
              value={form.comments}
              onChange={e => setForm({ ...form, comments: e.target.value })}
            />

            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit Feedback"}
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

export default FeedbackForm;