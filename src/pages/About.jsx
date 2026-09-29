
import React from "react";
import { useTheme } from "../context/ThemeContext";
import "./css/about.css";

const About = () => {
  const { colors } = useTheme();

  const values = [
    {
      icon: "✨",
      title: "Quality Products",
      text: "We focus on providing stylish and quality products for our customers.",
    },
    {
      icon: "❤️",
      title: "Customer First",
      text: "Our customers are at the heart of everything we do.",
    },
    {
      icon: "🔒",
      title: "Secure Shopping",
      text: "We provide a safe and secure shopping experience.",
    },
    {
      icon: "🚚",
      title: "Fast Delivery",
      text: "We work to deliver your favorite products quickly and safely.",
    },
  ];

  const stats = [
    {
      number: "1000+",
      label: "Happy Customers",
    },
    {
      number: "500+",
      label: "Products",
    },
    {
      number: "20+",
      label: "Categories",
    },
    {
      number: "24/7",
      label: "Customer Support",
    },
  ];

  return (
    <div
      className="about-page"
      style={{
        "--about-bg": colors.background,
        "--about-text": colors.text,
        "--about-primary": colors.primary,
        "--about-card": colors.card || colors.background,
        "--about-secondary":
          colors.secondary || colors.background,
      }}
    >

      <section className="about-hero">
        <div className="about-hero-content">
          <span>ABOUT APPLE BLOSSOM</span>

          <h1>
            Fashion, Style & Confidence 🍎
          </h1>

          <p>
            Welcome to Apple Blossom, your destination
            for fashion, beauty and lifestyle products.
          </p>
        </div>
      </section>

    
      <section className="about-section">
        <div className="about-story">

          <div className="story-image">
            <span>🍎</span>
          </div>

          <div className="story-content">
            <span className="section-label">
              OUR STORY
            </span>

            <h2>
              Bringing Style Closer To You
            </h2>

            <p>
              Apple Blossom is a fashion and lifestyle
              e-commerce platform created to make shopping
              simple, enjoyable and accessible.
            </p>

            <p>
              From stylish clothing and beautiful accessories
              to shoes, slippers and beauty products, we
              bring different categories together in one
              convenient place.
            </p>

            <p>
              Our goal is to help every customer discover
              products that match their personality and style.
            </p>
          </div>

        </div>
      </section>

     
      <section className="mission-section">
        <div className="mission-grid">

          <div className="mission-card">
            <div className="mission-icon">
              🎯
            </div>

            <h2>Our Mission</h2>

            <p>
              Our mission is to provide fashionable,
              quality and affordable products while
              creating a smooth online shopping experience.
            </p>
          </div>

          <div className="mission-card">
            <div className="mission-icon">
              👁️
            </div>

            <h2>Our Vision</h2>

            <p>
              Our vision is to build a trusted fashion
              brand where customers can easily discover
              products they love.
            </p>
          </div>

        </div>
      </section>

    
      <section className="about-section">
        <div className="section-heading">
          <span>WHY APPLE BLOSSOM</span>

          <h2>
            Why Choose Us?
          </h2>

          <p>
            We want every shopping experience to be
            simple, secure and enjoyable.
          </p>
        </div>

        <div className="values-grid">
          {values.map((value) => (
            <div
              className="value-card"
              key={value.title}
            >
              <div className="value-icon">
                {value.icon}
              </div>

              <h3>{value.title}</h3>

              <p>{value.text}</p>
            </div>
          ))}
        </div>
      </section>

     
      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat) => (
            <div
              className="stat-card"
              key={stat.label}
            >
              <h2>{stat.number}</h2>

              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

     
      <section className="categories-section">
        <div className="section-heading">
          <span>OUR COLLECTION</span>

          <h2>
            Something For Everyone
          </h2>

          <p>
            Explore our wide range of fashion and
            lifestyle categories.
          </p>
        </div>

        <div className="about-categories">
          <div className="about-category">
            👕
            <h3>Shirts</h3>
          </div>

          <div className="about-category">
            👗
            <h3>Dresses</h3>
          </div>

          <div className="about-category">
            💍
            <h3>Bangles</h3>
          </div>

          <div className="about-category">
            👟
            <h3>Shoes</h3>
          </div>

          <div className="about-category">
            🥿
            <h3>Slippers</h3>
          </div>

          <div className="about-category">
            💄
            <h3>Beauty</h3>
          </div>
        </div>
      </section>

      
      <section className="about-cta">
        <div>
          <span>READY TO EXPLORE?</span>

          <h2>
            Discover Your Style With Apple Blossom
          </h2>

          <p>
            Explore our latest collection and find
            something made for you.
          </p>

          <button>
            Shop Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;

