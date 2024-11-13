import React from 'react';
import '../css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="brand">EventBooking</a>
      <div className="nav-links">
        <a href="/" className="home" style={{fontSize:"20px",fontWeight:"bold"}}>Home</a>
        <a href="/login" className="login"  style={{fontSize:"20px",fontWeight:"bold"}}>Login</a>
      </div>
    </nav>
  );
};

export default Navbar;
