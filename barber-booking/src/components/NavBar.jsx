import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/booking">Book</Link> | 
      <Link to="/barbers">Barbers</Link> |
      <Link to="/services">Services</Link>
    </nav>
  );
};

export default NavBar;
