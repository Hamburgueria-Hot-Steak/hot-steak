import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
      <nav className="menu-container" style={{ justifyContent: "flex-end" }}>
      <a href="./Home">Home</a>
      <a href="./Delivery">Delivery</a>
      <a href="./Sobre">Sobre</a>
      <a href="./Contato">Contato</a>
      <a href="./Login">Login</a>
    </nav>
    );
}

export default Navbar;
