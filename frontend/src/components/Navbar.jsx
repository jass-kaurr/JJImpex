import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const location = useLocation();

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 80) {
        setShow(false); // scrolling down
      } else {
        setShow(true); // scrolling up
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    // <nav className="navbar">
    <nav className={`navbar ${show ? "show" : "hide"}`}>
      <div className="logo">
        {/* <Link to="/">JJImpex</Link> */}
        <h4>JJ Impex</h4>
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
          <span onClick={() => scrollToSection("#")}>Home</span>
        </li>
        <li>
          <span onClick={() => scrollToSection("#about")}>About Us</span>
        </li>

        <li>
          <span onClick={() => scrollToSection("#brands")}>
            Brands We Deal In
          </span>
        </li>

        <li>
          <span onClick={() => scrollToSection("#contact")}>Contact Us</span>
        </li>
      </ul>

      {/* Overlay for mobile */}
      {open && (
        <div className="nav-overlay" onClick={() => setOpen(false)}></div>
      )}
    </nav>
  );
};

export default Navbar;
