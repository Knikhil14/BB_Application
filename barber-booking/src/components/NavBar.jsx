import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Barber Booking</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/barbers">Barbers</Link>
        <Link to="/booking">Book</Link>
      </div>
    </nav>
  );
};

export default NavBar;
