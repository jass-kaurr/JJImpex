import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import BrandCard from "../components/BrandCard.jsx";


const Home = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      // const res = await fetch("http://localhost:5000/api/brands");
      const API = import.meta.env.VITE_API_URL;

      const res = await fetch(`${API}/api/brands`);
      // const res = await fetch("https://jjimpex-backend.onrender.com/api/brands");
      const data = await res.json();
      setBrands(data);
    };
    fetchBrands();
  }, []);

  return (
    <div>
      <Navbar />
      <header>
        <h1>Welcome to JJImpex</h1>
      </header>

      <section id="about">
        <h2>About Us</h2>
        <p>We are a leading supplier of premium products for your business...</p>
      </section>

      <section id="brands">
        <h2>Brands We Deal In</h2>
        <div className="brand-list">
          {brands.map((brand) => (
            <BrandCard key={brand._id} brand={brand} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
