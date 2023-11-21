import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
      <nav className="menu-container" style={{justifyContent: "center" }}>
          <a href="./PainelAdminComandas">Comandas</a>
          <a href="./PainelAdminProducao">Produção</a>
          <a href="./PainelAdminEntregas">Entregas</a>
          <a href="/Login">Sair</a>
      </nav>
    );
}

export default Navbar;