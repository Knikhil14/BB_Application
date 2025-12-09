import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Elite Barber Shop</h1>
      <p>Book your grooming session with expert barbers</p>
      <a href="/services" className="btn-main">Book Now</a>
    </div>
  );
};

export default HomePage;
