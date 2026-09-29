import React from "react";
import "./ProductCard.css";
 
import { useTheme } from "../../context/ThemeContext"; 
const ProductCard = ({ product, onAddToCart }) => {
  console.log("ProductCard Render:", product.name);

  const { colors } = useTheme();

  return (
    <div
      className="product-card"
      style={{
        backgroundColor: colors.background,
        color: colors.text,
      }}
    >
      <h3 style={{ color: colors.text }}>
        {product.name}
      </h3>

      <p>
        Category: {product.category}
      </p>

      <p
        className="product-price"
        style={{ color: colors.primary }}
      >
        ₹{product.price}
      </p>

      <button
        onClick={() => onAddToCart(product)}
        style={{
          backgroundColor: colors.primary,
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default React.memo(ProductCard);