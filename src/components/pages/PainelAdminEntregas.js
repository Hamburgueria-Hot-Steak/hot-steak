import React, { useState, useRef, useEffect } from 'react';
import NavbarAdmin from '../navbar/NavbarAdmin';
import './PainelAdminEntregas.css';

function PainelAdminEntregas() {
  
  const [popup, setPopup] = useState(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    // Populando a ref com as seções
    document.querySelectorAll('.section-entregas').forEach((section, index) => {
      sectionRefs.current[index] = section;
    });
  }, []);

  useEffect(() => {
    // Populando a ref com as seções
    document.querySelectorAll('.section-entregas-pendentes').forEach((section, index) => {
      sectionRefs.current[index] = section;
    });
  }, []);

  const nomes = [
    'Maria de Fátima',
    'Igor Laranjeiras',
    'Ivanildo Marques',
    'Gabriel Ávila',
    'Ana Laura Acioly',
    'João Pedro Moura',
  ];

  const enderecos = [
    'Rua A - 1234 - Bairro A',
    'Rua B - 5445 - Bairro B',
    'Rua C - 6556 - Bairro C',
    'Rua D - 7655 - Bairro D',
    'Rua E - 9778 - Bairro E',
    'Rua F - 9767 - Bairro F',
  ];

  // Função para exibir o aviso pop-up
  function exibirAviso(nome, pedido, endereco) {
    // Se já houver uma pop-up aberta, fecha a anterior
    if (popup) {
      popup.close();
    }

    // Cria uma nova janela pop-up
    const novaPopup = window.open('', 'PedidoPopup', 'width=400,height=300');
    setPopup(novaPopup);

    // Adiciona o conteúdo à nova janela pop-up
    novaPopup.document.body.innerHTML = `
      <div>
        <p>Nome do Cliente: ${nome}</p>
        <p>Pedido: ${pedido}</p>
        <p>Endereço: ${endereco}</p>
        <button id="fecharPopupBtn">OK</button>
      </div>
    `;

    // Adiciona um evento para fechar a pop-up quando o botão é clicado
    const fecharBtn = novaPopup.document.getElementById('fecharPopupBtn');
    if (fecharBtn) {
      fecharBtn.addEventListener('click', () => {
        novaPopup.close();
        setPopup(null);
      });
    }
  }

  // Adicionando event listeners para cada seção usando refs
  useEffect(() => {
    sectionRefs.current.forEach((section, index) => {
      if (section) {
        section.addEventListener('click', () => {
          // Obtendo as informações da seção clicada
          const nomeCliente = nomes[index];
          const numeroPedido = `Pedido ${index + 1}`;
          const enderecoCliente = enderecos[index];

          // Chamando a função de manipulação do clique
          exibirAviso(nomeCliente, numeroPedido, enderecoCliente);
        });
      }
    });
  }, [sectionRefs.current, nomes, enderecos]);


    return (
        <>
           <div>
      <NavbarAdmin />

      <h1 className='txt-comandas'>ENTREGAS</h1>

      <div className='pedidos-container'>
        <div className='grupo-1'>
          <section className='section-entregas'>
            <img className="img-pedido1" src="./assets/opcao-hamburguer-mega.webp" alt="Pedido 1" />
            <p className='pedidos'>PEDIDO 1</p>
            <img className="icone-confirmar" src="./assets/icone confirmar.png" alt="Ícone Confirmar" />
          </section>

          <section className='section-entregas'>
            <img className="img-pedido2" src="./assets/opcao-hamburguer-mega.webp" alt="Pedido 2" />
            <p className='pedidos'>PEDIDO 2</p>
            <img className="icone-confirmar" src="./assets/icone confirmar.png" alt="Ícone Confirmar" />
          </section>

          <section className='section-entregas'>
            <img className="img-pedido3" src="./assets/opcao-hamburguer-mega.webp" alt="Pedido 3" />
            <p className='pedidos'>PEDIDO 3</p>
            <img className="icone-confirmar" src="./assets/icone confirmar.png" alt="Ícone Confirmar" />
          </section>
        </div>

        <div className='grupo-2'>
          <section className='section-entregas'>
            <img className="img-pedido4" src="./assets/opcao-hamburguer-mega.webp" alt="Pedido 4" />
            <p className='pedidos'>PEDIDO 4</p>
            <img className="icone-confirmar" src="./assets/icone confirmar.png" alt="Ícone Confirmar" />
          </section>

          <section className='section-entregas'>
            <img className="img-pedido5" src="./assets/opcao-hamburguer-mega.webp" alt="Pedido 5" />
            <p className='pedidos'>PEDIDO 5</p>
            <img className="icone-confirmar" src="./assets/icone confirmar.png" alt="Ícone Confirmar" />
          </section>

          <section className='section-entregas'>
            <img className="img-pedido6" src="./assets/opcao-hamburguer-mega.webp" alt="Pedido 6" />
            <p className='pedidos'>PEDIDO 6</p>
            <img className="icone-confirmar" src="./assets/icone confirmar.png" alt="Ícone Confirmar" />
          </section>
        </div>

        <div className='grupo-3'>
          <section className='section-entregas-pendentes'>
            <img className="img-pedido7" src="./assets/opcao-hamburguer-mega.webp" alt="Pedido 7" />
            <p className='pedidos'>PEDIDO 7</p>
            <img className="icone-entrega-pendente" src="./assets/icone-cinza.png" alt="Ícone Cinza" />
          </section>

          <section className='section-entregas-pendentes'>
            <img className="img-pedido8" src="./assets/opcao-hamburguer-mega.webp" alt="Pedido 8" />
            <p className='pedidos'>PEDIDO 8</p>
            <img className="icone-entrega-pendente" src="./assets/icone-cinza.png" alt="Ícone Cinza" />
          </section>

          <section className='section-entregas-pendentes'>
            <img className="img-pedido9" src="./assets/opcao-hamburguer-mega.webp" alt="Pedido 9" />
            <p className='pedidos'>PEDIDO 9</p>
            <img className="icone-entrega-pendente" src="./assets/icone-cinza.png" alt="Ícone Cinza" />
          </section>
        </div>
      </div>
    </div>
            
        </>
      );
    }

export default PainelAdminEntregas;
