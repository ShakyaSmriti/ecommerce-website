import React, { useState } from "react";
import "./styles.css";
import Footer from "./footer";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    setError(""); 
    alert("Signup successful");
  };

  return (
    <div className="signup-page-container">
      <div className="signup-form-container">
      <h2 className="page-title">
  Create <span className="account-text">Account</span>
</h2>
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label htmlFor="name" className="required">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="required">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="required">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="primary-buttons">
            Create an Account
          </button>
        </form>
        <a href="/login" className="login-link">
          Already have an account? Login Here
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
