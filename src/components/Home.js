import React from 'react';
import Navbar from '../components/Navbar'
import './Home.css';

const Home = () => {
    return (
    <div className="App">
      <Navbar />
      <div className="box-titulo">
        <img className="hamburguer-topo-pagina" src="./assets/hamburguer-topo-pagina.png" alt="" />
        <div>
          <h1 className="titulo1">O MELHOR</h1>
          <h1 className="titulo2">HAMBÚRGUER</h1>
          <h1 className="titulo3">DA CIDADE</h1>
        </div>
      </div>

      <h2 id="menu" className="combos-hamburguer">COMBOS</h2>
      <div className="opcoes-hamburguer-container">
          <div className="combos">
            <div className="combo1">
              <img className="hamburguer1" src="./assets/combo-hamburguer1.jpg" alt="2 Hambúrguer + Batata Frita + Refrigerante" title="2 Hambúrguer + Batata Frita + Refrigerante" />
            <p>2 Hambúrguer + Batata Frita + Refrigerante</p>
          </div>

          <div className="combo2">
            <img className="hamburguer2" src="./assets/combo-hamburguer2.jpg" alt="3 Hambúrgueres" />
            <p>3 Hambúrguer da sua escolha</p>
          </div>

          <div className="combo3">
            <img className="hamburguer3" src="./assets/combo-hamburguer3.jpg" alt="Hambúrguer e Batata Frita" />
            <p>Hambúrguer + Batata Frita</p>
          </div>

          <div className="combo4">
            <img className="hamburguer4" src="./assets/combo-hamburguer4.jpg" alt="Combo Infantil" />
            <p>Combo infantil</p>
          </div>

          <div className="combo5">
            <img className="hamburguer5" src="./assets/combo-hamburguer5.jpg" alt="Hambúrguer de frango + Batata Frita" />
            <p>Hambúrguer de frango + Batata Frita</p>
          </div>

          <div className="combo6">
            <img className="hamburguer6" src="./assets/combo-hamburguer6.png" alt="Combo vegano" />
            <p>Combo vegano</p>
          </div>
        </div>
      </div>

      <h2 className="txt-hamburgueres">HAMBÚRGUERES</h2>
      <div className="opcoes-hamburguer-container">
        <div className="grupo-1">
        <div className="opcao-hamburguer1">
            <img src="./assets/Hamburguer-1.webp" alt="Hamburguer Especial Hot Steak" />
            <h1 style={{ fontSize: '20px' }}>Especial Hot Steak</h1>
        </div>

        <div className="opcao-hamburguer2">
            <img src="./assets/opcao-cheddar-bacon-hamburgueres.png" alt="Cheddar e Bacon" />
            <h1 style={{ fontSize: '20px' }}>Cheddar e Bacon</h1>
        </div>

        <div className="opcao-hamburguer3">
            <img src="./assets/opcao-hamburguer-mega.webp" alt="Hamburguer Mega" />
            <h1 style={{ fontSize: '20px' }}>Mega</h1>
        </div>
    </div>

    <div className="grupo-2">
        <div class="opcao-hamburguer4">
            <img src="./assets/opcao-hotfrango-hamburgueres.png" alt="Hot Frango" />
            <h1>HotFrango</h1>
        </div>

        <div className="opcao-hamburguer5">
            <img src="./assets/opcao-black-burguer-hamburgueres.jpg" alt="Black Burguer" />
            <h1>Black Burguer</h1>
        </div>

        <div className="opcao-hamburguer6">
            <img src="./assets/opcao-x-tudo.jpeg" alt="X-Tudo" />
                <h1>X-Tudo</h1>
            </div>
        </div>
    </div>
              <h4>ACOMPANHAMENTO</h4>
              <div class="opcao-acompanhamentos-container">
                <div class="opcao-acompanhamento1">
                  <img src="./assets/opcao-batata-frita-acompanhamentos.png" alt="Batata Frita" />
                  <p>Batata Frita</p>
                </div>

                <div className="opcao-acompanhamento2">
                  <img src="./assets/opcao-macaxeira-frita-acompanhamentos.jpeg" alt="Macaxeira Frita" />
                  <p>Macaxeira Frita</p>
               </div>
                <div class="opcao-acompanhamento3">
                  <img src="./assets/opcao-nuggets-frango-acompanhamentos.jpg" alt="Nuggets de Frango" />
                  <p>Nuggets de Frango</p>
                </div>
              </div>
          <footer>
            <a>Quem somos</a>
            <a>Franquias</a>
            <a>Privacidade</a>
            <a>Trabalhe Conosco</a>
            <img class="logotipo-hot-steak-miniatura" src="./assets/Logo Hamburgueria Hot Steak Miniatura.png" alt="Logotipo Miniatura Hot Steak" />
          </footer>
      </div>
    )
}

export default Home;