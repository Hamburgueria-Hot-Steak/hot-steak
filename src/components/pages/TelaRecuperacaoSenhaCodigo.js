import React, { useState, useEffect } from 'react';
import Loading from '../../components/loading/Loading';
import { Link } from 'react-router-dom';
import '../../components/pages/TelaRecuperacaoSenha.css';

function TelaRecuperacaoSenha() {
  const [isLoading, setIsLoading] = useState(true);
  const [codigo, setCodigo] = useState('');
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const handleAvancarClick = () => {
    if (codigo === '') {
      setShowWarning(true);
    } else {
      setShowWarning(false);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section>
      <h1 className="titulo-recuperacao-senha">RECUPERAÇÃO DE SENHA</h1>
      <p className="txt-inserir-dados">DIGITE O SEU CÓDIGO DE RECUPERAÇÃO</p>
      <input
        type="text"
        className="red-input-filled placeholder-small"
        value={codigo}
        onChange={(e) => setCodigo(e.target.value)}
      />
      {showWarning && <p className="aviso-campo-obrigatorio" style={{ color: 'red' }}>Preencha o campo de código!</p>}

      <div className="botoes-tela-recuperacao-senha">
        <Link to="/Login">
          <button className="voltar-button">
            Voltar
          </button>
        </Link>
        
        <Link to="/TelaRecuperacaoSenhaCodigo">
          <button className="cadastrar-button" onClick={handleAvancarClick}>
            Avançar
          </button>
        </Link>
      </div>
    </section>
  );
}

export default TelaRecuperacaoSenha;