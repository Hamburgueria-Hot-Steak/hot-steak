import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
      <nav className="menu-container">
        <a href="">Home</a>
        <a href="#menu">Menu</a>
        <a href="">Delivery</a>
        <a href="">Sobre</a>
        <a href="">Contato</a>
      </nav>
    );
}

export default Navbar;