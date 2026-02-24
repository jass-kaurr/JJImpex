// import React, { useState } from "react";
// import axios from "axios";

// const ContactForm = ({ close }) => {
//   const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post("http://localhost:5000/api/contact", form)
//       .then(() => {
//         alert("Submitted Successfully!");
//         close();
//       })
//       .catch(err => console.log(err));
//   };

//   return (
//     <div className="form-overlay">
//       <form onSubmit={handleSubmit}>
//         <h3>Contact Us</h3>
//         <input type="text" placeholder="Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
//         <input type="email" placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
//         <input type="text" placeholder="Phone" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} required />
//         <textarea placeholder="Message" value={form.message} onChange={e => setForm({...form, message: e.target.value})}></textarea>
//         <button type="submit">Submit</button>
//         <button type="button" onClick={close}>Close</button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;
import React, { useState } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";
const ContactForm = ({ close }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: ""
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

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validate()) return;

//     try {
//       setLoading(true);
//       await axios.post("http://localhost:5000/api/contact", form);
//       setSuccess(true);

//       setTimeout(() => {
//         setSuccess(false);
//         close();
//       }, 2500);

//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };
// const handleSubmit = async (e) => {
//   e.preventDefault();
//   if (!validate()) return;

//   try {
//     setLoading(true);

//     await emailjs.send(
//       "service_3v6bck8",
//       "template_14aqfdb",
//       form,
//       "17S-3Wlzk1RdFeigW"
//     );

//     setSuccess(true);

//     setTimeout(() => {
//       setSuccess(false);
//       close();
//     }, 2500);

//   } catch (err) {
//     console.error(err);
//   } finally {
//     setLoading(false);
//   }
// };

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validate()) return;

  try {
    setLoading(true);

    // 1️⃣ Save in database
    // await axios.post("http://localhost:5000/api/contact", form);

    const API = import.meta.env.VITE_API_URL;

    await axios.post(`${API}/api/contact`, form)
    
    // 2️⃣ Send email
    await emailjs.send(
      "service_3v6bck8",
      "template_14aqfdb",
      form,
      "17S-3Wlzk1RdFeigW"
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
            <div className="checkmark"></div>
            <h3>Message Sent Successfully!</h3>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h3>Contact Us</h3>

            <input
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
            />
            {errors.name && <span className="error">{errors.name}</span>}

            <input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
            />
            {errors.email && <span className="error">{errors.email}</span>}

            <input
              type="text"
              placeholder="Phone Number"
              value={form.phone}
              onChange={e => setForm({ ...form, phone: e.target.value })}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}

            <select
              value={form.subject}
              onChange={e => setForm({ ...form, subject: e.target.value })}
            >
              <option>General Inquiry</option>
              <option>Bulk Order</option>
              <option>Partnership</option>
              <option>Support</option>
            </select>

            <textarea
              placeholder="Your Message"
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
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
