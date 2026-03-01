import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const BrandItems = () => {
  const { brandId } = useParams();
  const [items, setItems] = useState([]);
  const [brandName, setBrandName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [brandId]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        // const res = await fetch(
        //   `http://localhost:5000/api/items/brand/${brandId}`,
        // );
        const API = import.meta.env.VITE_API_URL;
        const res = await fetch(`${API}/api/items/brand/${brandId}`);
        const data = await res.json();

        // Fix: destructure object
        setBrandName(data.brandName);
        setItems(data.items);
      } catch (err) {
        console.error("Failed to fetch items:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [brandId]);

  return (
    <div>
      <Navbar />
      <div className="brand-items-header">
        <h1>{brandName ? `${brandName} Items` : "Items"}</h1>
      </div>
      {loading ? (
        <div className="loader-wrapper">
          <span className="loader"></span>
        </div>
      ) : (
        <div className="items-list">
          {items.length > 0 ? (
            items.map((item, index) => (
              <div
                key={item._id}
                className="item-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="item-image-wrapper">
                  <img src={`/assets/brands/${item.image}`} alt={item.name} />
                  <div className="glow"></div>
                </div>
                <h3>{item.name}</h3>
              </div>
            ))
          ) : (
            <p>No items found for this brand.</p>
          )}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default BrandItems;
