import React, { useState, useEffect } from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isScrolling ? "scrolling" : ""}`}>
      <div className="wrapper">
        <div className="left">
          <Link className="link" to="/">
            {/* Use the public path for the image */}
            <img src="/img/diamore logo v2.png" alt="DIAMORE Logo" className="logo" />
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              HOMEPAGE
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              CATEGORIES
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/About">
              ABOUT
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/login">
              LOGIN
            </Link>
          </div>
          <div className="icons">
          <Link className="link" to="/login">

            <PersonOutlineOutlinedIcon />
            </Link>
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
