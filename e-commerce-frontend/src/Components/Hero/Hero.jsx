import React from "react";
import "./Hero.css";
import hero from "../Assets/hero2.jpg";
import arrow_icon from "../Assets/arrow.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Transforming Spaces, Inspiring Lives.</h2>
        <div>
          <div className="hero-hand-icon">
            <p>Discover</p>
          </div>
          <p>Your</p>
          <p style={{ color: "#d79db4" }}>Vibrant Home</p>
          <p>Style</p>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
