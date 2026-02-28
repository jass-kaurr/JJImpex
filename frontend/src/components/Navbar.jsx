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
// import React, { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { FaChevronDown } from "react-icons/fa";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [show, setShow] = useState(true);
//   const [openCollection, setOpenCollection] = useState(false);
//   const [brands, setBrands] = useState([]);

//   const location = useLocation();
//   const navigate = useNavigate();

//   /* ---------------- Fetch Brands ---------------- */
//   useEffect(() => {
//     const fetchBrands = async () => {
//       try {
//         const API = import.meta.env.VITE_API_URL;
//         const res = await fetch(`${API}/api/brands`);
//         const data = await res.json();
//         setBrands(data);
//       } catch (err) {
//         console.error("Failed to fetch brands", err);
//       }
//     };

//     fetchBrands();
//   }, []);

//   /* ---------------- Hide on Scroll ---------------- */
//   useEffect(() => {
//     let lastScroll = window.scrollY;

//     const handleScroll = () => {
//       const currentScroll = window.scrollY;

//       if (currentScroll > lastScroll && currentScroll > 80) {
//         setShow(false);
//       } else {
//         setShow(true);
//       }

//       lastScroll = currentScroll;
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   /* ---------------- Navigation ---------------- */

//   const goHome = () => {
//     setOpen(false);
//     navigate("/");
//   };

//   const scrollToSection = (id) => {
//     setOpen(false);

//     if (location.pathname !== "/") {
//       navigate("/");
//       setTimeout(() => {
//         document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
//       }, 400);
//       return;
//     }

//     document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
//   };

//   const goToBrand = (id) => {
//     setOpen(false);
//     setOpenCollection(false);
//     navigate(`/brand/${id}`);
//   };

//   /* ---------------- JSX ---------------- */

//   return (
//     <nav className={`navbar ${show ? "show" : "hide"}`}>
//       <div className="logo">
//         <Link to="/">JJ Impex</Link>
//       </div>

//       {/* Hamburger */}
//       <div className="hamburger" onClick={() => setOpen(!open)}>
//         <div className={`bar ${open ? "open" : ""}`} />
//         <div className={`bar ${open ? "open" : ""}`} />
//         <div className={`bar ${open ? "open" : ""}`} />
//       </div>

//       <ul className={`nav-links ${open ? "open" : ""}`}>
//         <li onClick={goHome}>Home</li>

//         {/* Collections */}
//         {/* <li className="collection-item">
//           <div
//             className="collection-header"
//             onClick={() => setOpenCollection(!openCollection)}
//           >
//             Collections
//             <FaChevronDown
//               className={`chevron ${openCollection ? "rotate" : ""}`}
//             />
//           </div>

//           {openCollection && (
//             <ul className="brand-submenu">
//               {brands.map((brand) => (
//                 <li
//                   key={brand._id}
//                   onClick={() => goToBrand(brand._id)}
//                 >
//                   {brand.name}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </li> */}
// <li className="collection-item">
//   <div
//     className="collection-header"
//     onClick={() => setOpenCollection(!openCollection)}
//   >
//     <span>Collections</span>
//     <FaChevronDown
//       className={`chevron ${openCollection ? "rotate" : ""}`}
//     />
//   </div>

//   {/* Desktop Dropdown */}
//   <div
//     className={`desktop-dropdown ${
//       openCollection ? "show-dropdown" : ""
//     }`}
//   >
//     {brands.map((brand) => (
//       <div
//         key={brand._id}
//         className="desktop-brand-item"
//         onClick={() => goToBrand(brand._id)}
//       >
//         {brand.name}
//       </div>
//     ))}
//   </div>

//   {/* Mobile Dropdown */}
//   {openCollection && (
//     <ul className="brand-submenu">
//       {brands.map((brand) => (
//         <li
//           key={brand._id}
//           onClick={() => goToBrand(brand._id)}
//         >
//           {brand.name}
//         </li>
//       ))}
//     </ul>
//   )}
// </li>
//         <li onClick={() => scrollToSection("#about")}>About</li>

//         <li onClick={() => scrollToSection("footer")}>Contact Us</li>
//       </ul>

//       {open && (
//         <div className="nav-overlay" onClick={() => setOpen(false)}></div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;