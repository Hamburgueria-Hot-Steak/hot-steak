import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
      <nav className="menu-container" style={{justifyContent: "center" }}>
          <a href="./PainelAdminComandas" style={{color: '#fff'}}>Comandas</a>
          <a href="./PainelAdminProducao" style={{color: '#fff'}}>Produção</a>
          <a href="./PainelAdminEntregas" style={{color: '#fff'}}>Entregas</a>
          <a href="/Login" style={{color: '#fff'}}>Sair</a>
      </nav>
    );
}

export default Navbar;