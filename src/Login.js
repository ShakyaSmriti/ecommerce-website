import React, { useState } from "react";
import "./styles.css";
import Footer from "./footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      alert("Login successful");
    } else {
      alert("Please enter valid credentials");
    }
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <h2 className="page-title">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="primary-button">
            LOGIN
          </button>
          <a href="#" className="forgot-password">
            Forgot your password?
          </a>
        </form>
        <p className="new-to-shemart-text">
          New to <span className="highlight">Shemart</span>?
        </p>
        <p className="form-footer">
          <a href="#" className="create-account-box">
            CREATE AN ACCOUNT
          </a>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Login;