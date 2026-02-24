import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const BrandItems = () => {
  const { brandId } = useParams();
  const [items, setItems] = useState([]);
  const [brandName, setBrandName] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch(`/api/items/brand/${brandId}`);
        // const res = await fetch(`http://localhost:5000/api/items/brand/${brandId}`);

        const data = await res.json();

        // Fix: destructure object
        setBrandName(data.brandName);
        setItems(data.items);
      } catch (err) {
        console.error("Failed to fetch items:", err);
      }
    };

    fetchItems();
  }, [brandId]);

  return (
    <div>
      <Navbar />

      <h1>{brandName ? `${brandName} Items` : "Items"}</h1>
      <div className="items-list">
  {items.length > 0 ? (
    items.map((item) => (
      <div key={item._id} className="item-row">
        <img src={`/assets/brands/${item.image}`} alt={item.name} />
        <div className="item-info">
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>

      </div>
    ))
  ) : (
    <p>No items found for this brand.</p>
  )}
</div>
      <Footer />

    </div>
  );
};

export default BrandItems;
