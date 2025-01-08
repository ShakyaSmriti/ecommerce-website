import React, { useState } from "react";
import "./clothingsection.css";

const products = [
  // Tops
  {
    id: 1,
    name: "Cotton Top",
    category: "tops",
    price: 3000,
    image: "/top6.jpg",
  },
  {
    id: 2,
    name: "Silk Blouse",
    category: "tops",
    price: 5000,
    image: "/top15.jpg",
  },
  {
    id: 3,
    name: "Chiffon Top",
    category: "tops",
    price: 2500,
    image: "/top2.jpg",
  },
  {
    id: 4,
    name: "Summer Shirt",
    category: "tops",
    price: 2200,
    image: "/top1.jpg",
  },
  {
    id: 5,
    name: "Linen Top",
    category: "tops",
    price: 3500,
    image: "/top10.jpg",
  },
  {
    id: 6,
    name: "V-neck Blouse",
    category: "tops",
    price: 4000,
    image: "/top13.jpg",
  },
  {
    id: 7,
    name: "Buttoned Top",
    category: "tops",
    price: 3300,
    image: "/top8.jpg",
  },
  {
    id: 8,
    name: "Cropped Top",
    category: "tops",
    price: 2900,
    image: "/top5.jpg",
  },
  {
    id: 9,
    name: "Sleeveless Top",
    category: "tops",
    price: 2700,
    image: "/top3.jpg",
  },
  {
    id: 10,
    name: "Floral Blouse",
    category: "tops",
    price: 3200,
    image: "/top7.jpg",
  },
  {
    id: 11,
    name: "Tie-dye Top",
    category: "tops",
    price: 2800,
    image: "/top4.jpg",
  },
  {
    id: 12,
    name: "Cowl Neck Top",
    category: "tops",
    price: 3800,
    image: "/top12.jpg",
  },
  {
    id: 13,
    name: "Peplum Top",
    category: "tops",
    price: 3400,
    image: "/top9.jpg",
  },
  {
    id: 14,
    name: "Turtleneck Top",
    category: "tops",
    price: 4500,
    image: "/top14.jpg",
  },
  {
    id: 15,
    name: "Plaid Blouse",
    category: "tops",
    price: 3600,
    image: "/top11.jpg",
  },

  // Pants
  {
    id: 16,
    name: "Skinny Jeans",
    category: "pants",
    price: 6000,
    image: "/pants1.jpg",
  },
  {
    id: 17,
    name: "Flared Pants",
    category: "pants",
    price: 8000,
    image: "/pants2.jpg",
  },
  {
    id: 18,
    name: "Cargo Pants",
    category: "pants",
    price: 7000,
    image: "/pants3.jpg",
  },
  {
    id: 19,
    name: "Wide-Leg Pants",
    category: "pants",
    price: 7500,
    image: "/pants4.jpg",
  },
  {
    id: 20,
    name: "High-Waisted Pants",
    category: "pants",
    price: 8500,
    image: "/pants5.jpg",
  },
  {
    id: 21,
    name: "Chino Pants",
    category: "pants",
    price: 5000,
    image: "/pants6.jpg",
  },
  {
    id: 22,
    name: "Leather Pants",
    category: "pants",
    price: 9500,
    image: "/pants7.jpg",
  },
  {
    id: 23,
    name: "Jogger Pants",
    category: "pants",
    price: 5200,
    image: "/pants8.jpg",
  },
  {
    id: 24,
    name: "Palazzo Pants",
    category: "pants",
    price: 6500,
    image: "/pants9.jpg",
  },
  {
    id: 25,
    name: "Tapered Pants",
    category: "pants",
    price: 5600,
    image: "/pants10.jpg",
  },
  {
    id: 26,
    name: "Bootcut Pants",
    category: "pants",
    price: 7200,
    image: "/pants11.jpg",
  },
  {
    id: 27,
    name: "Sweatpants",
    category: "pants",
    price: 4200,
    image: "/pants12.jpg",
  },
  {
    id: 28,
    name: "Dress Pants",
    category: "pants",
    price: 6600,
    image: "/pants13.jpg",
  },
  {
    id: 29,
    name: "Printed Pants",
    category: "pants",
    price: 5800,
    image: "/pants14.jpg",
  },
  {
    id: 30,
    name: "Slim Fit Pants",
    category: "pants",
    price: 4900,
    image: "/pants15.jpg",
  },

  // Dresses
  {
    id: 31,
    name: "Maxi Dress",
    category: "dress",
    price: 10000,
    image: "/dress1.jpg",
  },
  {
    id: 32,
    name: "Midi Dress",
    category: "dress",
    price: 8000,
    image: "/dress2.jpg",
  },
  {
    id: 33,
    name: "Floral Dress",
    category: "dress",
    price: 9500,
    image: "/dress3.jpg",
  },
  {
    id: 34,
    name: "Bodycon Dress",
    category: "dress",
    price: 12000,
    image: "/dress4.jpg",
  },
  {
    id: 35,
    name: "Cocktail Dress",
    category: "dress",
    price: 15000,
    image: "/dress5.jpg",
  },
  {
    id: 36,
    name: "A-line Dress",
    category: "dress",
    price: 11000,
    image: "/dress6.jpg",
  },
  {
    id: 37,
    name: "Shift Dress",
    category: "dress",
    price: 9000,
    image: "/dress7.jpg",
  },
  {
    id: 38,
    name: "T-shirt Dress",
    category: "dress",
    price: 6500,
    image: "/dress8.jpg",
  },
  {
    id: 39,
    name: "Empire Waist Dress",
    category: "dress",
    price: 9500,
    image: "/dress9.jpg",
  },
  {
    id: 40,
    name: "Silk Dress",
    category: "dress",
    price: 11000,
    image: "/dress10.jpg",
  },
  {
    id: 41,
    name: "Mini Dress",
    category: "dress",
    price: 7500,
    image: "/dress11.jpg",
  },
  {
    id: 42,
    name: "Long Sleeve Dress",
    category: "dress",
    price: 10000,
    image: "/dress12.jpg",
  },
  {
    id: 43,
    name: "Boho Dress",
    category: "dress",
    price: 8500,
    image: "/dress13.jpg",
  },
  {
    id: 44,
    name: "Wrap Dress",
    category: "dress",
    price: 10500,
    image: "/dress14.jpg",
  },
  {
    id: 45,
    name: "Sundress",
    category: "dress",
    price: 7000,
    image: "/dress15.jpg",
  },
];

function ClothingSection() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortOrder, setSortOrder] = useState("low-to-high");

  const filteredProducts = products.filter((product) => {
    return selectedCategory === null || product.category === selectedCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "low-to-high") {
      return a.price - b.price;
    } else if (sortOrder === "high-to-low") {
      return b.price - a.price;
    }
    return 0;
  });

  const scrollToCategory = (category) => {
    setSelectedCategory(category);
    const categorySection = document.getElementById(category);
    if (categorySection) {
      categorySection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fashion-section">
      <div className="category-banner">
        <h3>Shop by Category</h3>
        <div className="category-buttons">
          {[{ name: "tops", imgSrc: "/tops.jpg" }, { name: "pants", imgSrc: "/pants.jpg" }, { name: "dress", imgSrc: "/dress.jpg" }]
            .map((category) => (
              <div key={category.name} className="category-btn">
                <button
                  className={selectedCategory === category.name ? "selected" : ""}
                  onClick={() => scrollToCategory(category.name)}
                >
                  <div className="circle">
                    <img
                      src={category.imgSrc}
                      alt={`${category.name} category`}
                      className="category-image"
                    />
                  </div>
                  <span>{category.name.charAt(0).toUpperCase() + category.name.slice(1)}</span>
                </button>
              </div>
            ))}
        </div>
      </div>

      <div className="price-filter">
        <h3>Filters</h3>
        <select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder}>
          <option value="low-to-high">Low to High</option>
          <option value="high-to-low">High to Low</option>
        </select>
      </div>

      <div className="category-list">
        <h3>{selectedCategory ? selectedCategory.toUpperCase() : "All Categories"}</h3>
        <div className="product-grid">
          {sortedProducts.map((product) => (
            <div key={product.id} className="product-item">
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p>${product.price}</p>
              <button className="add-to-cart">
                <i className="fas fa-shopping-cart"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClothingSection;