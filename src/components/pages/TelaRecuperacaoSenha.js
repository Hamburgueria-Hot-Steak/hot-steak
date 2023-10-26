import React, { useState } from 'react';
import Loading from '../../components/loading/Loading';
import { Link } from 'react-router-dom';
import '../../components/pages/TelaRecuperacaoSenha.css';

function TelaRecuperacaoSenha() {
  const [codigo, setCodigo] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Função auxiliar para verificar se todos os dados estão preenchidos
  const dadosPreenchidos = () => {
    return codigo !== ''; // Adicione outras condições conforme necessário
  };

  const handleAvancarClick = () => {
    if (dadosPreenchidos()) {
        alert('Por favor, preencha os dados.');
      setShowWarning(false);
      setIsLoading(true);

      // Simulação de uma operação assíncrona (por exemplo, uma requisição)
      setTimeout(() => {
        setIsLoading(false);

        // Verifica se todos os dados estão preenchidos antes de avançar
        if (dadosPreenchidos()) {
        } else {
          alert('Preencha todos os campos antes de avançar.');
        }
      }, 2000);
    } else {
      setShowWarning(true);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="logotipo-hotsteak">
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

        {showWarning && <p className="aviso-campo-obrigatorio" style={{ color: 'red' }}>Preencha o campo de código!</p>}

        <div className="botoes-tela-recuperacao-senha">
          <Link to="/login">
            <button className="voltar-button">Voltar</button>
          </Link>

          <Link to="/TelaRecuperacaoSenhaCodigo">
            <button className="cadastrar-button" onClick={handleAvancarClick}>
              Avançar
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default TelaRecuperacaoSenha;