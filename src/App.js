import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import Home from "./components/Home";
import Signup from "./Signup";
import Login from "./Login";
import ClothingSection from "./components/clothingsection";
import Footwear from "./components/footwear";
import "./styles.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/clothing" element={<ClothingSection />} />
          <Route path="/footwear" element={<Footwear />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
