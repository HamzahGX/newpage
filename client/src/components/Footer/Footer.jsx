import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <Link to="/products/1"><span>Jewelry</span></Link>
          <Link to="/products/1"><span>Watches</span></Link>
          <Link to="/products/1"><span>Accessories</span></Link>
          <Link to="/products/1"><span>Sale</span></Link>
          <Link to="/products/1"><span>New Arrivals</span></Link>
        </div>
        <div className="item">
          <h1>Links</h1>
          <Link to="/"><span>Home Page</span></Link>
          <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
            <span>Stores</span>
          </a>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <span>Cookies</span>
          </a>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
        <img src="/img/diamore logo v2.png" alt="DIAMORE Logo" className="logo" />
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
