import React from 'react';
import './About.scss';

const About = () => {
  return (
    <div className="about-container">
      <div className="header">
        <div className="text">About Diamore</div>
        <div className="underline"></div>
      </div>
      <div className="content">
        <p>
          Welcome to Diamore, a distinguished jewelry company founded in 1988.
          We specialize in crafting exquisite diamond jewelry and watches that
          embody timeless elegance and sophistication.
        </p>
        <p>
          Our journey began over three decades ago when our founder, Emily
          Johnson, envisioned creating a brand that would redefine the world of
          jewelry. Since then, Diamore has been synonymous with exceptional
          craftsmanship, stunning designs, and unparalleled quality.
        </p>
        <p>
          At Diamore, we take pride in our wide range of diamond jewelry,
          including breathtaking engagement rings, exquisite necklaces,
          bracelets, and watches. Each piece is meticulously crafted by our
          skilled artisans to ensure it reflects the beauty and brilliance that
          diamonds are known for.
        </p>
        <p>
          Our commitment to quality extends beyond our products. We provide a
          personalized shopping experience, assisting you in finding the ideal
          piece that suits your style and preferences, whether you're
          celebrating a special occasion or searching for the perfect gift.
        </p>
        <p>
          As we continue our journey, we invite you to explore the world of
          Diamore and discover the allure of our diamond creations. Thank you
          for being a part of our story, and we look forward to serving you with
          passion and excellence for many years to come.
        </p>
      </div>
    </div>
  );
};

export default About;
