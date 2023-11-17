import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
      <nav className="menu-container" style={{justifyContent: "center" }}>
          <a href="./Home">Comandas</a>
          <a href="#">Produção</a>
          <a href="#">Entregas</a>
          <a href="/Login">Sair</a>
      </nav>
    );
}

export default Navbar;