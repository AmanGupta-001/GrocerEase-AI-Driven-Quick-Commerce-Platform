import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();

  const handleSendOtp = () => {
    if (email) {
      setOtpSent(true);
      alert("OTP sent to your email (mock: 1234)");
    } else {
      alert("Please enter your email");
    }
  };

  const handleVerifyOtp = () => {
    if (otp === "1234") {
      alert("Login successful!");
      navigate("/");
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {!otpSent ? (
          <button type="button" onClick={handleSendOtp} className="login-btn">
            Send OTP
          </button>
        ) : (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button
              type="button"
              onClick={handleVerifyOtp}
              className="login-btn"
            >
              Verify OTP
            </button>
          </>
        )}
      </form>

      <p className="switch-link">
        New user? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default Login;
