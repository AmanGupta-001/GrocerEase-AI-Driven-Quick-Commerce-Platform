import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import fruits from "./assets/fruits.jpg";
import vegetables from "./assets/veggies.jpg";
import dairy from "./assets/dairy.jpg";
import snacks from "./assets/snacks.jpg";
import beverages from "./assets/soft-drinks.jpg";

import pharmacy from "./assets/Pharmacy.jpg";
import pet from "./assets/Pet.jpg";
import baby from "./assets/baby.jpg";

const categories = [
  { id: 1, name: "Fruits", image: fruits },
  { id: 2, name: "Vegetables", image: vegetables },
  { id: 3, name: "Dairy", image: dairy },
  { id: 4, name: "Snacks", image: snacks },
  { id: 5, name: "Beverages", image: beverages },
];

const promos = [
  {
    id: 1,
    title: "Pharmacy at your doorstep!",
    subtitle: "Cough syrups, pain relief sprays & more",
    image: pharmacy, // your uploaded image
    link: "/pharmacy",
    bgColor: "#00BFA5",
  },
  {
    id: 2,
    title: "Pet Care supplies in minutes",
    subtitle: "Food, treats, toys & more",
    image: pet,
    link: "/pet-care",
    bgColor: "#FFD54F",
  },
  {
    id: 3,
    title: "No time for a diaper run?",
    subtitle: "Get baby care essentials in minutes",
    image: baby,
    link: "/baby-care",
    bgColor: "#E3F2FD",
  },
];


const Home = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (name) => {
    navigate(`/category/${name}`);
  };

  const handlePromoClick = (link) => {
    navigate(link);
  };

  return (
    <div className="app">
      <header className="navbar">
        <h1 className="logo">GrocerEase</h1>
        <input className="search" type="text" placeholder="Search for groceries..." />
         <div className="nav-actions">
          <button className="login-btn" onClick={() => navigate("/login")}>Login</button>
          <button className="cart-btn">🛒 Cart</button>
         </div>
      </header>

      <section className="hero">
        <h2>
          Groceries delivered to your door in <span>10 minutes</span> 🚀
        </h2>
        <p>Fast, Fresh & Reliable - Shop like Zepto & Blinkit.</p>
        <button className="cta-btn">Shop Now</button>
      </section>

      {/* Promo Section */}
      <section className="promos">
  <div className="promo-grid">
    {promos.map((promo) => (
      <div
        key={promo.id}
        className="promo-card"
        onClick={() => handlePromoClick(promo.link)}
        style={{
          backgroundImage: `url(${promo.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "16px",
          overflow: "hidden",
        }}
      >
        <div
          className="promo-overlay"
          style={{ backgroundColor: promo.bgColor }}
         >
          <div className="promo-text">
            <h3>{promo.title}</h3>
            <p>{promo.subtitle}</p>
            <button className="promo-btn">Order Now</button>
          </div>
          </div>
         </div>
           ))}
         </div>
        </section>
 

      <section className="categories">
        <h2>Shop by Categories</h2>
        <div className="category-grid">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="category-card"
              onClick={() => handleCategoryClick(cat.name)}
              style={{ cursor: "pointer" }}
            >
              <img src={cat.image} alt={cat.name} />
              <p>{cat.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
