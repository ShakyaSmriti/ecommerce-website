import React from "react";
import { FaUserCircle, FaHeart, FaShoppingCart } from "react-icons/fa";
import "./styles.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Shemart</h1>
      </div>
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Clothing</a></li>
        <li><a href="#">Footwear</a></li>
        <li><a href="#">Accessories</a></li>
      </ul>
      <div className="navbar-icons">
        <a href="#" className="icon"><FaUserCircle size={24} /></a>
        <a href="#" className="icon"><FaHeart size={24} /></a>
        <a href="#" className="icon"><FaShoppingCart size={24} /></a>
      </div>
    </nav>
  );
};

export default Navbar;
