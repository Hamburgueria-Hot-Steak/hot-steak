import NavbarAdmin from '../navbar/NavbarAdmin';
import './PainelAdminProducao.css';
import { Link } from 'react-router-dom';

function PainelAdminProducao () {
    return (
        <div>
        <NavbarAdmin />
        <h1 className='txt-producao'>PRODUÇÃO</h1>
  
        <div className='pedidos-container'>
          <div className='grupo-1'>
              <section className='section-producao'>
                <img className="img-pedido1" src="./assets/opcao-hamburguer-mega.webp" alt="Pedido 1" />
                <p className='pedidos'>PEDIDO 1</p>
                <Link to="/PainelAdminEntregas">
                  <img className="icone-mais" src="./assets/icone mais.png" alt="Ícone Mais" />
                </Link>
              </section>
  
            <section className='section-producao'>
              <img className="img-pedido2" src="./assets/opcao-hamburguer-mega.webp" alt="Pedido 2" />
              <p className='pedidos'>PEDIDO 2</p>
              <Link to="/PainelAdminEntregas">
                <img className="icone-mais" src="./assets/icone mais.png" alt="Ícone Mais" />
              </Link>
            </section>
  
            <section className='section-producao'>
              <img className="img-pedido3" src="./assets/opcao-hamburguer-mega.webp" alt="Pedido 3" />
              <p className='pedidos'>PEDIDO 3</p>
              <Link to="/PainelAdminEntregas">
                <img className="icone-mais" src="./assets/icone mais.png" alt="Ícone Mais" />
              </Link>
            </section>
          </div>
  
          <div className='grupo-2'>
            <section className='section-producao'>
              <img className="img-pedido4" src="./assets/opcao-hamburguer-mega.webp" alt="Pedido 4" />
              <p className='pedidos'>PEDIDO 4</p>
              <Link to="/PainelAdminEntregas">
                <img className="icone-mais" src="./assets/icone mais.png" alt="Ícone Mais" />
              </Link>
            </section>
  
            <section className='section-producao'>
              <img className="img-pedido5" src="./assets/opcao-hamburguer-mega.webp" alt="Pedido 5" />
              <p className='pedidos'>PEDIDO 5</p>
              <Link to="/PainelAdminEntregas">
                <img className="icone-mais" src="./assets/icone mais.png" alt="Ícone Mais" />
              </Link>
            </section>
  
            <section className='section-producao'>
              <img className="img-pedido6" src="./assets/opcao-hamburguer-mega.webp" alt="Pedido 6" />
              <p className='pedidos'>PEDIDO 6</p>
              <Link to="/PainelAdminEntregas">
                <img className="icone-mais" src="./assets/icone mais.png" alt="Ícone Mais" />
              </Link>
            </section>
          </div>
  
          <div className='grupo-3'>
            <section className='section-producao'>
              <img className="img-pedido7" src="./assets/opcao-hamburguer-mega.webp" alt="Pedido 7" />
              <p className='pedidos'>PEDIDO 7</p>
              <Link to="/PainelAdminEntregas">
                <img className="icone-mais" src="./assets/icone mais.png" alt="Ícone Mais" />
              </Link>
            </section>
  
            <section className='section-producao'>
              <img className="img-pedido8" src="./assets/opcao-hamburguer-mega.webp" alt="Pedido 8" />
              <p className='pedidos'>PEDIDO 8</p>
              <Link to="/PainelAdminEntregas">
                <img className="icone-mais" src="./assets/icone mais.png" alt="Ícone Mais" />
              </Link>
            </section>
  
            <section className='section-producao'>
              <img className="img-pedido9" src="./assets/opcao-hamburguer-mega.webp" alt="Pedido 9" />
              <p className='pedidos'>PEDIDO 9</p>
              <Link to="/PainelAdminEntregas">
                <img className="icone-mais" src="./assets/icone mais.png" alt="Ícone Mais" />
              </Link>
            </section>
          </div>
        </div>
      </div>
    );
}

export default PainelAdminProducao;