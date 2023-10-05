import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
      <nav className="menu-container" style={{ justifyContent: "flex-end" }}>
          <a href="./Home">Home</a>
          <a href="./Delivery">Delivery</a>
          <a href="./Sobre">Sobre</a>
          <a href="./Contato">Contato</a>
          <a href="./Login"><img className="icone-compras" src="./assets/icon_compras.png" alt="Ícone Compras" /></a>
      </nav>
    );
}

export default Navbar;
