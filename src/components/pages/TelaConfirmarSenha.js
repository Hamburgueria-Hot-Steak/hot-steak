import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../components/loading/Loading';
import '../../components/pages/TelaRecuperacaoSenha.css';

function TelaConfirmarSenha() {
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [senhaAviso, setSenhaAviso] = useState('');
  const [senhaTocada, setSenhaTocada] = useState(false); // Novo estado para verificar se a senha foi tocada

  // Função auxiliar para verificar se todos os dados estão preenchidos
  const dadosPreenchidos = () => senha !== '' && confirmarSenha !== '';

  // Função auxiliar para verificar se a senha atende aos requisitos
  const senhaValida = () => senha.length === 8 && /[!@#$%^&*(),.?":{}|<>]/.test(senha);

  useEffect(() => {
    // Verifica se a senha atende aos critérios apenas se a senha foi tocada
    if (senhaTocada) {
      const isSenhaValida = validarSenha(senha);
      setSenhaAviso(isSenhaValida ? '' : 'AVISO: A senha deve ter pelo menos 8 caracteres e incluir caracteres especiais.');
    }
  }, [senha, senhaTocada]);

  const validarSenha = (senha) => {
    // Adicione sua lógica de validação de senha aqui
    // Por exemplo, verificando se a senha tem pelo menos 8 caracteres
    return senha.length >= 8;
  };

  const handleAvancarClick = () => {
    if (!dadosPreenchidos() || !senhaValida()) {
      // Se os dados NÃO estiverem preenchidos ou a senha não for válida, exiba o aviso
      setShowWarning(true);
    }
  };

  const handleSenhaChange = (event) => {
    // Limita a senha a 8 caracteres
    setSenha(event.target.value.slice(0, 8));
    // Marca que a senha foi tocada
    setSenhaTocada(true);
  };

  const handleConfirmarSenhaChange = (event) => {
    // Limita a confirmação de senha a 8 caracteres
    setConfirmarSenha(event.target.value.slice(0, 8));
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="logotipo-hotsteak-tela-confirmar-senha">
        <Link to="/home">
          <img className="logotipo-hotsteak" src="./assets/Logotipo Hot Steak.png" alt="Logotipo Hot Steak" />
        </Link>
      </div>
      <section className="conteudo-centralizado-confirmar-senha">
        <h1 className="titulo-recuperacao-senha">RECUPERAÇÃO DE SENHA</h1>
        <p className="txt-inserir-dados">DIGITE SUA NOVA SENHA</p>
        <input
          type="password"
          className="red-input-filled placeholder-small"
          value={senha}
          maxLength={8}
          onChange={(e) => {
            setSenha(e.target.value);
            setSenhaTocada(true); // Marca a senha como tocada quando o usuário digita
          }}
        />
        <p className="txt-inserir-dados">CONFIRME SUA SENHA</p>
        <input
          type="password"
          className="red-input-filled placeholder-small"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
          maxLength={8}
        />

        {showWarning && (
          <p className="aviso-campo-obrigatorio" style={{ color: 'red', fontSize: '20px'}}>
            Por favor, preencha os dados.
          </p>
        )}

        {senhaAviso && (
          <p className="aviso-campo-obrigatorio" style={{ color: 'red', fontSize: '20px'}}>
            {senhaAviso}
          </p>
        )}

        <div className="botoes-tela-recuperacao-senha">
          <Link to="/TelaRecuperacaoSenhaCodigo">
            <button className="voltar-button">Voltar</button>
          </Link>

          <Link to={senha !== '' ? '/Login' : '/TelaConfirmarSenha'}>
          <button className="avancar-button" onClick={handleAvancarClick}>
           Confirmar
          </button>
        </Link>
        </div>
      </section>
    </div>
  );
}

export default TelaConfirmarSenha;