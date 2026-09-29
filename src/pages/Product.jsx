 
import React, { useMemo, useState, useCallback } from "react";
import { useTheme } from "../context/ThemeContext";
import ProductCard from "../component/ProductCard/ProductCard";
import "./css/Product.css";
const products = [
  {
    id: 1,
    name: "White Shirt",
    category: "shirts",
    price: 250,
  },
  {
    id: 2,
    name: "Black Shirt",
    category: "shirts",
    price: 300,
  },
  {
    id: 3,
    name: "Little Shirt",
    category: "shirts",
    price: 500,
  },
  {
    id: 4,
    name: "Long Shirt",
    category: "shirts",
    price: 700,
  },
  {
    id: 5,
    name: "Blue Shirt",
    category: "shirts",
    price: 350,
  },
  {
    id: 6,
    name: "Red Dress",
    category: "dresses",
    price: 600,
  },
  {
    id: 7,
    name: "Green Dress",
    category: "dresses",
    price: 800,
  },
  {
    id: 8,
    name: "Yellow Dress",
    category: "dresses",
    price: 900,
  },
  {
    id: 9,
    name: "Purple Dress",
    category: "dresses",
    price: 1000,
  },
  {
    id: 10,
    name: "Orange Dress",
    category: "dresses",
    price: 1100,
  },
  {
    id: 11,
    name: "Pink Dress",
    category: "dresses",
    price: 1200,
  },
  {
    id: 12,
    name: "Brown Dress",
    category: "dresses",
    price: 1300,
  },
];

function ProductList() {
  const [category, setCategory] = useState("all");
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);

  const { colors } = useTheme();

  console.log("ProductList Render");

  // useMemo
  const filteredProducts = useMemo(() => {
    console.log("Product filtering running...");

    const result = products.filter((product) => {
      if (category === "all") return true;

      return product.category === category;
    });

    console.log("Filtered products:", result);

    return result;
  }, [category]);

  // useCallback
  const handleAddToCart = useCallback((product) => {
    console.log("Adding to cart:", product.name);

    setCart((previousCart) => [
      ...previousCart,
      product,
    ]);
  }, []);

  return (
    <div className="product-page">

      <h1>Products</h1>

      <button
        onClick={() => setCount(count + 1)}
        style={{
          background: colors.primary,
        }}
      >
        Re-render: {count}
      </button>

      <div className="category-buttons">

        <button onClick={() => setCategory("all")}>
          All
        </button>

        <button onClick={() => setCategory("shirts")}>
          Shirts
        </button>

        <button onClick={() => setCategory("dresses")}>
          Dresses
        </button>

      </div>

      <h2>
        Products: {filteredProducts.length}
      </h2>

      <h3>
        Cart Items: {cart.length}
      </h3>

      <div className="product-grid">

        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}

      </div>

    </div>
  );
}

export default ProductList;
 
