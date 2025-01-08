import React, { useState, useEffect, useRef } from "react";
import {
  FaUserCircle,
  FaHeart,
  FaShoppingCart,
  FaSearch,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  const handleProfileClick = () => {
    navigate("/login");
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const searchLowerCase = searchQuery.toLowerCase();

    // Define keyword mappings for categories and subcategories
    const categoryMappings = {
      clothing: ["clothing", "dress", "shirts", "tops", "jeans", "pants", "jackets"],
      footwear: ["footwear", "shoes", "sandals", "boots", "sneakers"],
      accessories: ["accessories", "jewelry", "earrings"],
    };

    let found = false;
    for (const [category, keywords] of Object.entries(categoryMappings)) {
      if (keywords.some((keyword) => searchLowerCase.includes(keyword))) {
        navigate(`/${category}`);
        found = true;
        break;
      }
    }

    if (!found) {
      alert("No results found for your search.");
    }

    setSearchQuery("");
    setShowSearch(false);
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
          <h1>SheMart</h1>
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/clothing">Clothing</Link>
        </li>
        <li>
          <Link to="/footwear">Footwear</Link>
        </li>
        <li>
          <Link to="/accessories">Accessories</Link>
        </li>
      </ul>
      <div className="navbar-icons">
        <a href="#" className="icon" onClick={handleSearchClick}>
          <FaSearch size={24} />
        </a>
        <a href="#" className="icon">
          <FaHeart size={24} />
        </a>
        <a href="#" className="icon">
          <FaShoppingCart size={24} />
        </a>
        <a href="#" className="icon" onClick={handleProfileClick}>
          <FaUserCircle size={24} />
        </a>
      </div>
      {showSearch && (
        <div ref={searchRef} className="search-bar-container">
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              className="search-bar"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearchSubmit(e);
              }}
            />
          </form>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
