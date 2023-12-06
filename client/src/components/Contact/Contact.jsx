import React from "react";
import "./Contact.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>SUBSCRIBE TO OUR NEWSLETTER:</span>
        <div className="mail">
          <input type="text" placeholder="Please enter your e-mail..." />
          <a href="https://www.gmail.com" target="_blank" rel="noopener noreferrer">
            <button>JOIN US</button>
          </a>
        </div>
        <div className="icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FacebookIcon />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <TwitterIcon />
          </a>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <GoogleIcon />
          </a>
          <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
            <PinterestIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
