import React, { useState, useEffect, useRef } from "react";
import "../styles.css";

const Home = () => {
  const dealsRef = useRef(null);

  const scrollToDeals = () => {
    dealsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/home1.jpg",  
    "/home2.jpg",  
    "/home.jpg", 
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            <span className="step">Step Into</span>
            <span className="fashion">Fashion</span>: 
            <span className="highlight">Shop the Look <br />Today</span>
          </h1>
          <button className="shop-now" onClick={scrollToDeals}>
            Browse Collections
          </button>
        </div>
        <div className="hero-image">
          <img src={images[currentImage]} alt="Fashion" />
          <div className="hero-overlay"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature">
          <i className="fas fa-shipping-fast"></i>
          <p>Free Shipping</p>
          <span>Free shipping on all orders</span>
        </div>
        <div className="feature">
          <i className="fas fa-headset"></i>
          <p>Support 24/7</p>
          <span>Contact us anytime for help</span>
        </div>
        <div className="feature">
          <i className="fas fa-sync-alt"></i>
          <p>Money Return</p>
          <span>30 days money back guarantee</span>
        </div>
        <div className="feature">
          <i className="fas fa-percent"></i>
          <p>Order Discount</p>
          <span>Exclusive discounts available</span>
        </div>
      </section>

{/* Daily Deals Section */}
<section className="daily-deals" ref={dealsRef}>
<h2 className="daily-deals-heading">
  Daily <span className="deals-highlight">DEALS</span>!
</h2>
  <div className="products-grid">
    {[
      { name: "CROP TOP", price: "Rs. 1500", img: "/crop top.jpg" },
      { name: "", price: "Rs. 350", video: "/Heels.mp4" },
      { name: "", price: "Rs. 4200", img: "/earring1.jpg" },
      { name: "", price: "Rs. 4500", img: "/formalpants.jpg" },
      { name: "", price: "Rs. 4700", img: "/crop1.jpg" },
      { name: "", price: "Rs. 4800", img: "/earring2.jpg" },
      { name: "", price: "Rs. 450", video: "/earring.mp4" },
      { name: "", price: "Rs. 4900", img: "/Grunch.jpg" },
      { name: "", price: "Rs. 5000", img: "/earring3.jpg" },
      { name: "", price: "Rs. 4000", video: "/Heels1.mp4" },
      { name: "", price: "Rs. 5000", img: "/Heels2.jpg" },
      { name: "", price: "Rs. 5000", img: "/Heels3.jpg" },

    ].map((item, index) => (
      <div className="product" key={index}>
        {item.img ? (
          <img src={item.img} alt={item.name} />
        ) : (
          <video
            src={item.video}
            controls
            alt={item.name}
            style={{ width: "100%", borderRadius: "5px" }}
          />
        )}
        <p>{item.name}</p>
        <span>{item.price}</span>
      </div>
    ))}
  </div>
</section>
    </div>
  );
};

export default Home;
