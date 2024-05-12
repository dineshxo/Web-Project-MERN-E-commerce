import React from "react";
import "./Footer.css";
import logo from "../Assets/logo.png";
import instagram_icon from "../Assets/ig.png";
import facebook_icon from "../Assets/facebook.png";
import whatsapp_icon from "../Assets/whatsapp.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="logo" />
      </div>
      <p style={{ lineHeight: "1.5", color: "gray", textAlign: "justify" }}>
        <span style={{ fontWeight: "bold" }}>Hello There !</span> Welcome to
        FurnitureHouse, your one-stop destination for exquisite furniture pieces
        and home decor essentials. With a passion for interior design and a
        commitment to quality craftsmanship, we strive to elevate your living
        spaces with our curated selection of furniture and accessories. At
        FurnitureHouse, we understand the importance of merging style with
        functionality. Our carefully crafted furniture pieces not only enhance
        the aesthetics of your home but also provide comfort and practicality
        for everyday living. Whether you're looking for a cozy sofa set, a
        stylish dining table, or elegant bedroom furniture, we have everything
        you need to create your dream home. We believe that furniture is more
        than just pieces of wood and fabric; it's a reflection of your
        personality and lifestyle. From modern minimalist designs to classic and
        timeless pieces, our collection caters to diverse tastes and
        preferences. Let us help you transform your house into a home that truly
        reflects your unique style and personality.
      </p>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={facebook_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
