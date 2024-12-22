import React, { useState, useEffect, useRef } from "react";
import { FaUserCircle, FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  const handleProfileClick = () => {
    navigate("/login"); // Navigate to the Login page when the profile icon is clicked
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo-link">
          <h1>Shemart</h1>
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="#">Home</Link></li>
        <li><Link to="#">Clothing</Link></li>
        <li><Link to="#">Footwear</Link></li>
        <li><Link to="#">Accessories</Link></li>
      </ul>
      <div className="navbar-icons">
        <a href="#" className="icon" onClick={handleSearchClick}>
          <FaSearch size={24} />
        </a>
        <a href="#" className="icon" onClick={handleProfileClick}>
          <FaUserCircle size={24} />
        </a>
        <a href="#" className="icon"><FaHeart size={24} /></a>
        <a href="#" className="icon"><FaShoppingCart size={24} /></a>
      </div>
      {showSearch && (
        <div ref={searchRef} className="search-bar-container">
          <input type="text" className="search-bar" placeholder="Search products..." />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
