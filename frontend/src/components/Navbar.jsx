// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   // Smooth scroll to section
//   const scrollToSection = (id) => {
//     setOpen(false); // close hamburger on click
//     const element = document.querySelector(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <nav className="navbar">
//       {/* Logo linked to home page */}
//       <div className="logo">
//         <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
//           JJImpex
//         </Link>
//       </div>

//       {/* Hamburger icon for mobile */}
//       <div className="hamburger" onClick={() => setOpen(!open)}>
//         <div className={`bar ${open ? "open" : ""}`}></div>
//         <div className={`bar ${open ? "open" : ""}`}></div>
//         <div className={`bar ${open ? "open" : ""}`}></div>
//       </div>

//       <ul className={`nav-links ${open ? "open" : ""}`}>
//         <li>
//           <button
//             onClick={() => scrollToSection("#about")}
//           >
//             About Us
//           </button>
//         </li>
//         <li>
//           <button
//             onClick={() => scrollToSection("#brands")}
//           >
//             Brands We Deal In
//           </button>
//         </li>
//         <li>
//           <button
//             onClick={() => scrollToSection("#contact")}
//           >
//             Contact Us
//           </button>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (id) => {
    setOpen(false);

    // If not on homepage, go to homepage first
    if (location.pathname !== "/") {
      window.location.href = `/${id}`;
      return;
    }

    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">JJImpex</Link>
      </div>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <div className={`bar ${open ? "open" : ""}`}></div>
        <div className={`bar ${open ? "open" : ""}`}></div>
        <div className={`bar ${open ? "open" : ""}`}></div>
      </div>

      {/* Offcanvas Menu */}
      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li>
          <span onClick={() => scrollToSection("#about")}>
            About Us
          </span>
        </li>

        <li>
          <span onClick={() => scrollToSection("#brands")}>
            Brands We Deal In
          </span>
        </li>

        <li>
          <span onClick={() => scrollToSection("#contact")}>
            Contact Us
          </span>
        </li>
      </ul>

      {/* Overlay for mobile */}
      {open && <div className="nav-overlay" onClick={() => setOpen(false)}></div>}
    </nav>
  );
};

export default Navbar;
