import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Login from "./login";
import Register from "./Register";
import apple from "./assets/apple.jpg";
import CategoryPage from "./CategoryPage";
import mango from "./assets/mango.jpg";

// Sample items data for all categories
export const itemsData = {
  Fruits: [
    { id: 1, name: "Mango", price: "₹150/kg", stock: true, image: mango },
    { id: 2, name: "Apple", price: "₹200/kg", stock: false, image: apple},
  ],
  Vegetables: [
    { id: 3, name: "Spinach", price: "₹45/bunch", stock: true, image: "https://i.imgur.com/1zj1mfr.png" },
    { id: 4, name: "Carrot", price: "₹60/kg", stock: false, image: "https://i.imgur.com/6ZcL4Yp.png" },
  ],
  Dairy: [
    { id: 5, name: "Almond Milk", price: "₹250/litre", stock: true, image: "https://i.imgur.com/RvlDyD7.png" },
    { id: 6, name: "Cheese", price: "₹120", stock: false, image: "https://i.imgur.com/0pS7FRe.png" },
  ],
  Snacks: [
    { id: 7, name: "Chips Combo", price: "₹99", stock: true, image: "https://i.imgur.com/oA1MQJ0.png" },
  ],
  Beverages: [
    { id: 8, name: "Soft Drinks Pack", price: "₹299", stock: true, image: "https://i.imgur.com/B5lmE8u.png" },
  ],
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category/:name" element={<CategoryPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
