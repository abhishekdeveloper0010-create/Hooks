
import React, { useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import "./css/contact.css";

const Contact = () => {
  const { colors } = useTheme();

  const nameRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Name:", nameRef.current.value);
    console.log("Email:", emailRef.current.value);
  };

  return (
    <div className="contact-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <h2>Contact Us</h2>

        <input
          type="text"
          placeholder="Enter your name"
          ref={nameRef}
        />

        <input
          type="email"
          placeholder="Enter your email"
          ref={emailRef}
        />

        <button
          type="submit"
          className="submit-button"
          style={{ backgroundColor: colors.primary }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
