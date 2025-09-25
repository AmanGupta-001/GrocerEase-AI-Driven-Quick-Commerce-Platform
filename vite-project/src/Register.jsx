import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // reuse same styling

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    if (formData.name && formData.phone && formData.email) {
      alert("Registration successful! Please login now.");
      navigate("/login");
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <div className="login-container">
      <h2>Register</h2>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />

        <button
          type="button"
          onClick={handleRegister}
          className="login-btn"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
