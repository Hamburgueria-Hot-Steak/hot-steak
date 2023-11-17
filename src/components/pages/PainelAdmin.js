import React from 'react';
import './PainelAdmin.css';
import NavbarAdmin from '../../components/navbar/NavbarAdmin';

function PainelAdmin() {
  return (
    <div>
      <NavbarAdmin />
      <h1 className='txt-painel-administrador'>PAINEL DO ADMINISTRADOR</h1>
      <h1 className='txt-painel-administrador'>HOT STEAK</h1>

      <div className='pedidos-container'>
        <div className='grupo-1'>
          <section className='section-pedido1'>
            <img className="img-pedido1" src="./assets/opcao-hamburguer-mega.webp" alt="Pedido 1" />
            <p className='pedidos'>PEDIDO 1</p>
          </section>

          <section className='section-pedido2'>
            <img className="img-pedido2" src="./assets/opcao-hamburguer-mega.webp" alt="Pedido 2" />
            <p className='pedidos'>PEDIDO 2</p>
          </section>

          <section className='section-pedido3'>
            <img className="img-pedido3" src="./assets/opcao-hamburguer-mega.webp" alt="Pedido 3" />
            <p className='pedidos'>PEDIDO 3</p>
          </section>
        </div>

        <div className='grupo-2'>
          <section className='section-pedido4'>
            <img className="img-pedido4" src="./assets/opcao-hamburguer-mega.webp" alt="Pedido 4" />
            <p className='pedidos'>PEDIDO 4</p>
          </section>

          <section className='section-pedido5'>
            <img className="img-pedido5" src="./assets/opcao-hamburguer-mega.webp" alt="Pedido 5" />
            <p className='pedidos'>PEDIDO 5</p>
          </section>

          <section className='section-pedido6'>
            <img className="img-pedido6" src="./assets/opcao-hamburguer-mega.webp" alt="Pedido 6" />
            <p className='pedidos'>PEDIDO 6</p>
          </section>
        </div>

        <div className='grupo-3'>
          <section className='section-pedido7'>
            <img className="img-pedido7" src="./assets/opcao-hamburguer-mega.webp" alt="Pedido 7" />
            <p className='pedidos'>PEDIDO 7</p>
          </section>

          <section className='section-pedido8'>
            <img className="img-pedido8" src="./assets/opcao-hamburguer-mega.webp" alt="Pedido 8" />
            <p className='pedidos'>PEDIDO 8</p>
          </section>

          <section className='section-pedido9'>
            <img className="img-pedido9" src="./assets/opcao-hamburguer-mega.webp" alt="Pedido 9" />
            <p className='pedidos'>PEDIDO 9</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PainelAdmin;
