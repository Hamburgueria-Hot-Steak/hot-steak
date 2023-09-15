import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="menu-container">
        <img class="logotipo-miniatura-hot-steak" src="./assets/Logo Hamburgueria Hot Steak Miniatura.png" alt="Miniatura Logo Hot Steak" />
        <img class="logotipo-hot-steak" src="./assets/Logo Hot Steak Menu.png" alt="Logo Hot Steak" />
        <a href="">Home</a>
        <a href="#menu">Menu</a>
        <a href="">Delivery</a>
        <a href="">Sobre</a>
        <a href="">Contato</a>
      </nav>
    );
}

export default Navbar;