import "./TelaRecuperacaoSenha.css";
import { Link } from 'react-router-dom'; 

function TelaSenhaAlterada () {
    return (
        <div className="design-tela-recuperacao-senha">
            <div className="logo-container">
                <Link to="/Home">
                    <img className="logotipo-hot-steak" src="./assets/Logotipo Hot Steak.png" alt="Logotipo Hot Steak" />
                </Link>
            </div>
        <section>
            <h1 className="txt-senha-alterada">SUA SENHA FOI ALTERADA COM SUCESSO!</h1>
            <img className="verde-confirmado" src="./assets/verde-confirmado.png" alt="" />
            <div>
                <Link to="/Home">
                    <button className="avancar-button">TELA INICIAL</button>
                </Link>
            </div>
        </section>
        </div>
    )
};

export default TelaSenhaAlterada;