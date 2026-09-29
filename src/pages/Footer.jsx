
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import "./css/Footer.css";

const Footer = () => {
  const { colors } = useTheme();

  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email");
      return;
    }

    console.log("Newsletter Email:", email);

    alert("Thank you for subscribing!");

    setEmail("");
  };

  return (
    <footer
      className="footer"
      style={{
        "--footer-bg": colors.card || colors.background,
        "--footer-text": colors.text,
        "--footer-primary": colors.primary,
        "--footer-secondary":
          colors.secondary || colors.background,
      }}
    >
      {/* =========================
          NEWSLETTER
      ========================= */}

      <div className="footer-newsletter">
        <div className="newsletter-content">
          <div>
            <span>STAY UPDATED</span>

            <h2>
              Subscribe to Apple Blossom
            </h2>

            <p>
              Get latest fashion updates, new arrivals
              and exclusive offers directly in your inbox.
            </p>
          </div>

          <form
            className="newsletter-form"
            onSubmit={handleSubscribe}
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* =========================
          MAIN FOOTER
      ========================= */}

      <div className="footer-main">
        <div className="footer-container">

          {/* Brand */}
          <div className="footer-column footer-brand">
            <h2>
              Apple Blossom 🍎
            </h2>

            <p>
              Your destination for fashion, beauty
              and lifestyle products. Discover your
              style with Apple Blossom.
            </p>

            <div className="social-links">
              <a href="#" aria-label="Facebook">
                f
              </a>

              <a href="#" aria-label="Instagram">
                ◎
              </a>

              <a href="#" aria-label="Twitter">
                𝕏
              </a>

              <a href="#" aria-label="YouTube">
                ▶
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3>Quick Links</h3>

            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/product">Products</Link>
              </li>

              <li>
                <Link to="/about">About Us</Link>
              </li>

              <li>
                <Link to="/contact">Contact Us</Link>
              </li>

              <li>
                <Link to="/wishlist">Wishlist</Link>
              </li>

              <li>
                <Link to="/cart">Shopping Cart</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="footer-column">
            <h3>Categories</h3>

            <ul>
              <li>
                <Link to="/product">
                  Shirts
                </Link>
              </li>

              <li>
                <Link to="/product">
                  Dresses
                </Link>
              </li>

              <li>
                <Link to="/product">
                  Bangles
                </Link>
              </li>

              <li>
                <Link to="/product">
                  Shoes
                </Link>
              </li>

              <li>
                <Link to="/product">
                  Slippers
                </Link>
              </li>

              <li>
                <Link to="/product">
                  Beauty
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="footer-column">
            <h3>Customer Service</h3>

            <ul>
              <li>
                <Link to="/contact">
                  Contact Support
                </Link>
              </li>

              <li>
                <Link to="/orders">
                  Track Order
                </Link>
              </li>

              <li>
                <Link to="/returns">
                  Returns & Refunds
                </Link>
              </li>

              <li>
                <Link to="/shipping">
                  Shipping Information
                </Link>
              </li>

              <li>
                <Link to="/faq">
                  FAQs
                </Link>
              </li>

              <li>
                <Link to="/privacy">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-column footer-contact">
            <h3>Contact Us</h3>

            <div className="contact-item">
              <span>📍</span>

              <p>
                Apple Blossom
                <br />
                India
              </p>
            </div>

            <div className="contact-item">
              <span>📞</span>

              <p>
                +91 XXXXX XXXXX
              </p>
            </div>

            <div className="contact-item">
              <span>✉️</span>

              <p>
                support@appleblossom.com
              </p>
            </div>

            <div className="contact-item">
              <span>🕒</span>

              <p>
                Mon - Sat
                <br />
                10:00 AM - 7:00 PM
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* =========================
          BOTTOM FOOTER
      ========================= */}

      <div className="footer-bottom">
        <div className="footer-bottom-content">

          <p>
            © {new Date().getFullYear()} Apple Blossom.
            All Rights Reserved.
          </p>

          <div className="footer-bottom-links">
            <Link to="/privacy">
              Privacy Policy
            </Link>

            <Link to="/terms">
              Terms & Conditions
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

