import './TelaPagamento.css';
import { Link } from 'react-router-dom';

function TelaPagamento () {
    return (
        <div className="design-tela-pagamento">
            <section className="section-pagamento">
                 <h1 className="txt-escolha-pagamento">ESCOLHA A FORMA DE PAGAMENTO</h1>
                 <Link to="/OpcaoPixPagamento">
                    <img className="img-pix" src="./assets/logo-pix.png" alt="Logotipo Pix" />
                </Link>
                    <p className="opcao-pix">PAGUE COM PIX</p>

                <Link to="/OpcaoCartaoDebitoCredito">
                    <img className="img-debito-credito" src="./assets/logo-debito-credito.png" alt="Logotipo Débito/Crédito" />
                </Link>
                    <p className="opcao-pix">DÉBITO/CRÉDITO</p>
                <Link to="/OpcaoDinheiro">
                    <img className="img-dinheiro" src="./assets/logo-dinheiro.png" alt="Logotipo Dinheiro" />
                </Link>
                    <p className="opcao-pix">DINHEIRO</p>
            </section>
        </div>
    );
}

export default TelaPagamento;