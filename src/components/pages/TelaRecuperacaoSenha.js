import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../components/loading/Loading';
import '../../components/pages/TelaRecuperacaoSenha.css';

function TelaRecuperacaoSenha() {
  const [codigo, setCodigo] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Função auxiliar para verificar se todos os dados estão preenchidos
  const dadosPreenchidos = () => codigo !== ''; // Adicione outras condições conforme necessário

  const handleAvancarClick = () => {
    setShowWarning(!dadosPreenchidos());
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="design-tela-recuperacao-senha">
      <div className="logotipo-hotsteak-recuperacao-senha">
        <Link to="/home">
          <img src="./assets/Logotipo Hot Steak.png" alt="Logotipo Hot Steak" />
        </Link>
      </div>
      <section>
        <h1 className="titulo-recuperacao-senha">RECUPERAÇÃO DE SENHA</h1>
        <p className="txt-inserir-dados">INSIRA O EMAIL OU TELEFONE VINCULADO À SUA CONTA</p>
        <input
          type="text"
          className="red-input-filled placeholder-small"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
        />

        {showWarning && (
          <p className="aviso-campo-obrigatorio" style={{ color: 'red', fontSize: '18px' }}>
            Por favor, preencha seus dados!
          </p>
        )}

        <div className="botoes-tela-recuperacao-senha">
          <Link to="/Login">
            <button className="voltar-button">Voltar</button>
          </Link>

          <Link to={dadosPreenchidos() ? '/TelaRecuperacaoSenhaCodigo' : '/TelaRecuperacaoSenha'}>
            <button className="avancar-button" onClick={handleAvancarClick}>
              Avançar
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default TelaRecuperacaoSenha;
