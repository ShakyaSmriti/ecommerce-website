import React from "react";
import "./footwear.css"; 

const footwearItems = [
  { id: 1, name: "High Heels", price: "$59.99", image: "high-heels.jpg" },
  { id: 2, name: "Stiletto Heels", price: "$69.99", image: "stiletto-heels.jpg" },
  { id: 3, name: "Leather Shoes", price: "$89.99", image: "leather-shoes.jpg" },
  { id: 4, name: "Casual Leather Shoes", price: "$79.99", image: "casual-leather-shoes.jpg" },
];

const Footwear = () => {
  return (
    <div className="footwear-container">
      {/* Hero Image */}
      <div className="footwear-hero-image">
        <img
          src="/footwear.jpg" 
          alt="Footwear Collection"
          className="hero-image"
        />
      </div>

      <h1 className="footwear-title">Women's Footwear Collection</h1>

      {/* Footwear Items Grid */}
      <div className="footwear-item-grid">
        {footwearItems.map((item) => (
          <div key={item.id} className="footwear-item-card">
            <img
              src={`/images/${item.image}`}
              alt={item.name}
              className="footwear-item-image"
            />
            <h3 className="footwear-item-name">{item.name}</h3>
            <p className="footwear-item-price">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footwear;
