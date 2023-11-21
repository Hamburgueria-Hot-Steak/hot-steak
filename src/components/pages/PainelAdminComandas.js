import React from 'react';
import './PainelAdminComandas.css';
import NavbarAdmin from '../navbar/NavbarAdmin';
import { Link } from 'react-router-dom';

function PainelAdmin() {
  return (
    <div>
      <NavbarAdmin />
      <h1 className='txt-comandas'>COMANDAS</h1>

      <div className='pedidos-container'>
        <div className='grupo-1'>
            <section className='section-pedido1'>
              <img className="img-pedido1" src="./assets/opcao-hamburguer-mega.webp" alt="Pedido 1" />
              <Link to="/PainelAdminProducao" className='link-no-underline'>
                <p className='pedidos'>PEDIDO 1</p>
              </Link>
            </section>

        <section className='section-pedido2'>
            <img className="img-pedido2" src="./assets/opcao-hamburguer-mega.webp" alt="Pedido 2" />
            <Link to="/PainelAdminProducao" className='link-no-underline'>
              <p className='pedidos'>PEDIDO 2</p>
            </Link>
        </section>

        <section className='section-pedido3'>
            <img className="img-pedido3" src="./assets/opcao-hamburguer-mega.webp" alt="Pedido 3" />
            <Link to="/PainelAdminProducao" className='link-no-underline'>
              <p className='pedidos'>PEDIDO 3</p>
            </Link>
        </section>
        </div>

        <div className='grupo-2'>
          <section className='section-pedido4'>
            <img className="img-pedido4" src="./assets/opcao-hamburguer-mega.webp" alt="Pedido 4" />
            <Link to="/PainelAdminProducao" className='link-no-underline'>
              <p className='pedidos'>PEDIDO 4</p>
            </Link>
          </section>

            <section className='section-pedido5'>
              <img className="img-pedido5" src="./assets/opcao-hamburguer-mega.webp" alt="Pedido 5" />
              <Link to="/PainelAdminProducao" className='link-no-underline'>
                <p className='pedidos'>PEDIDO 5</p>
              </Link>
            </section>

          <section className='section-pedido6'>
            <img className="img-pedido6" src="./assets/opcao-hamburguer-mega.webp" alt="Pedido 6" />
            <Link to="/PainelAdminProducao" className='link-no-underline'>
              <p className='pedidos'>PEDIDO 6</p>
            </Link>
          </section>
        </div>

        <div className='grupo-3'>
          <section className='section-pedido7'>
            <img className="img-pedido7" src="./assets/opcao-hamburguer-mega.webp" alt="Pedido 7" />
            <Link to="/PainelAdminProducao" className='link-no-underline'>
               <p className='pedidos'>PEDIDO 7</p>
            </Link>
          </section>

            <section className='section-pedido8'>
              <img className="img-pedido8" src="./assets/opcao-hamburguer-mega.webp" alt="Pedido 8" />
              <Link to="/PainelAdminProducao" className='link-no-underline'>
                <p className='pedidos'>PEDIDO 8</p>
              </Link>
            </section>

            <section className='section-pedido9'>
              <img className="img-pedido9" src="./assets/opcao-hamburguer-mega.webp" alt="Pedido 9" />
              <Link to="/PainelAdminProducao" className='link-no-underline'>
                <p className='pedidos'>PEDIDO 9</p>
              </Link>
            </section>
        </div>
      </div>
    </div>
  );
}

export default PainelAdmin;
