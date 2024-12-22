import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import Categories from "./components/Categories";
import Signup from "./Signup";
import Login from "./Login";
import "./styles.css";

function App() {
  return (
    <Router>
      <Navbar /> {/* Always visible */}
      <div className="main-content"> {/* Main container for page content */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer /> {/* Always visible */}
    </Router>
  );
}

export default App;
