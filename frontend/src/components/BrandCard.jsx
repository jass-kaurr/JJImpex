import React from "react";
import { useNavigate } from "react-router-dom";

const BrandCard = ({ brand }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/brand/${brand._id}`);
  };

  return (
    <div className="brand-card" onClick={handleClick} style={{ cursor: "pointer" }}>
      <img src={`/assets/brands/${brand.image}`} alt={brand.name} />

      <h3>{brand.name}</h3>
    </div>
  );
};

export default BrandCard;
