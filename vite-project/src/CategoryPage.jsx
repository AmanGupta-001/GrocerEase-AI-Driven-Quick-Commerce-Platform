import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { itemsData } from "./App";
import "./CategoryPage.css"
const CategoryPage = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const items = itemsData[name] || [];

  return (
    <div className="category-page">
      <button className="back-btn" onClick={() => navigate(-1)}>⬅ Back</button>
      <h2>{name}</h2>
      <div className="product-grid">
        {items.map((item) => (
          <div key={item.id} className={`product-card ${!item.stock ? "out-of-stock" : ""}`}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <p className="stock-status">{item.stock ? "In Stock" : "Out of Stock"}</p>
            <button className="add-btn" disabled={!item.stock}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
