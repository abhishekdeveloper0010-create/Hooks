
import { useTheme } from "../context/ThemeContext";
import "./css/Home.css";

function Home() {
  const { colors } = useTheme();

  const categories = [
    { name: "Shirts", icon: "👕" },
    { name: "Dresses", icon: "👗" },
    { name: "Bangles", icon: "💍" },
    { name: "Shoes", icon: "👟" },
    { name: "Slippers", icon: "🥿" },
    { name: "Beauty", icon: "💄" },
  ];

  const features = [
    {
      icon: "🚚",
      title: "Free Shipping",
      text: "Free shipping on selected orders",
    },
    {
      icon: "🔒",
      title: "Secure Payment",
      text: "100% secure payment",
    },
    {
      icon: "↩️",
      title: "Easy Returns",
      text: "Easy return and exchange",
    },
    {
      icon: "💬",
      title: "24/7 Support",
      text: "We are here to help you",
    },
  ];

  const products = [
    {
      name: "Stylish Shirt",
      price: "₹799",
      oldPrice: "₹1,299",
      discount: "38% OFF",
    },
    {
      name: "Elegant Dress",
      price: "₹1,299",
      oldPrice: "₹1,999",
      discount: "35% OFF",
    },
    {
      name: "Fashion Bangles",
      price: "₹399",
      oldPrice: "₹699",
      discount: "43% OFF",
    },
    {
      name: "Classic Shoes",
      price: "₹1,499",
      oldPrice: "₹2,199",
      discount: "32% OFF",
    },
  ];

  return (
    <div
      className="home"
      style={{
        "--home-bg": colors.background,
        "--home-text": colors.text,
        "--home-primary": colors.primary,
        "--home-card": colors.card || colors.background,
        "--home-secondary": colors.secondary || colors.background,
      }}
    >
      <section className="home-hero">
        <div className="hero-content">
          <p className="hero-subtitle">WELCOME TO APPLE BLOSSOM</p>

          <h1>Fashion That Matches Your Style 🍎</h1>

          <p className="hero-description">
            Discover the latest fashion, beauty and lifestyle
            products at Apple Blossom.
          </p>

          <button className="primary-btn">
            Shop Now
          </button>
        </div>
      </section>

      <section className="home-section categories-section">
        <div className="section-heading">
          <span>EXPLORE</span>
          <h2>Shop By Category</h2>
          <p>Find your perfect style from our collections.</p>
        </div>

        <div className="categories-grid">
          {categories.map((category) => (
            <div
              className="category-card"
              key={category.name}
            >
              <div className="category-icon">
                {category.icon}
              </div>

              <h3>{category.name}</h3>

              <button className="category-btn">
                Explore
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section products-section">
        <div className="section-heading">
          <span>OUR COLLECTION</span>
          <h2>Featured Products</h2>
          <p>Trending products selected specially for you.</p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product.name}>
              <div className="product-image">
                <span>🛍️</span>

                <span className="discount-badge">
                  {product.discount}
                </span>
              </div>

              <div className="product-info">
                <h3>{product.name}</h3>

                <div className="product-price">
                  <strong>{product.price}</strong>

                  <span>{product.oldPrice}</span>
                </div>

                <button className="cart-btn">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section features-section">
        <div className="section-heading">
          <span>OUR PROMISE</span>
          <h2>Why Choose Apple Blossom?</h2>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <div className="feature-card" key={feature.title}>
              <div className="feature-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="offer-section">
        <div className="offer-content">
          <span>LIMITED TIME OFFER</span>

          <h2>Get Up To 50% OFF 🔥</h2>

          <p>
            Upgrade your wardrobe with our latest fashion
            collection.
          </p>

          <button className="offer-btn">
            Explore Offers
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;

