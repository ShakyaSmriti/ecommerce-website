import React from "react";

const FeaturedProducts = () => {
  const products = [
    { id: 1, name: "Product 1", image: "path/to/image1.jpg" },
    { id: 2, name: "Product 2", image: "path/to/image2.jpg" },
    { id: 3, name: "Product 3", image: "path/to/image3.jpg" },
  ];

  return (
    <div className="featured-products">
      <h2>Featured Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
