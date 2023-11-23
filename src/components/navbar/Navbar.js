import React from 'react';
import './Navbar.css';
import CartButton from '../cartButton/CartButton';

const Navbar = () => {
    return (
      <nav className="menu-container" style={{ justifyContent: "center"}}>
          <a href="./Home"><img className="logotipo-hot-steak-horizontal" src="./assets/Logotipo Hot Steak.png" alt="Logotipo Hot Steak Horizontal" /></a>
          <a style={{ color: 'white' }} href="./Home">Home</a>
          <a style={{color: 'white'}} href="./Delivery">Delivery</a>
          <a style={{ color: 'white' }} href="./Login">Entrar</a>
          <CartButton/>
      </nav>
    );
}

export default Navbar;
