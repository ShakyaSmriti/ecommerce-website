import React from "react";

const Categories = () => {
  const categories = [
    { id: 1, name: "Clothing", image: "path/to/clothing.jpg" },
    { id: 2, name: "Footwear", image: "path/to/footwear.jpg" },
    { id: 3, name: "Accessories", image: "path/to/accessories.jpg" },
  ];

  return (
    <div className="categories">
      <h2>Shop by Categories</h2>
      <div className="category-list">
        {categories.map((category) => (
          <div key={category.id} className="category">
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
