import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from "../Assets/nav_dropdown.png";

const Navbar = () => {
  let [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="nav">
      <Link to="/" style={{ textDecoration: "none" }} className="nav-logo">
        <img src={logo} alt="logo" />
      </Link>
      <img
        onClick={dropdown_toggle}
        className="nav-dropdown"
        src={nav_dropdown}
        alt=""
      />
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            Welcome
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("home");
          }}
        >
          <Link to="/home" style={{ textDecoration: "none" }}>
            Home
          </Link>
          {menu === "home" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("garden");
          }}
        >
          <Link to="/garden" style={{ textDecoration: "none" }}>
            Garden
          </Link>
          {menu === "garden" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("office");
          }}
        >
          <Link to="/office" style={{ textDecoration: "none" }}>
            Office
          </Link>
          {menu === "office" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/cart">
          <img src={cart_icon} alt="cart" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            Log out
          </button>
        ) : (
          <Link to="/login" style={{ textDecoration: "none", zIndex: 99 }}>
            <button>Log In</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
