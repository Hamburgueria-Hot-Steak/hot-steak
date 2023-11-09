import React, { useState, useEffect } from 'react';
import Loading from '../../components/loading/Loading';
import '../../components/pages/Cadastro.css';
import { Link } from 'react-router-dom';

function Cadastro() {
  const [isLoading, setIsLoading] = useState(true);
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState(''); // Adicione o estado para o CPF
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [senhaAviso, setSenhaAviso] = useState('');
  const [senhaTocada, setSenhaTocada] = useState(false); // Novo estado para verificar se a senha foi tocada
  const [avisoPreenchimento, setAvisoPreenchimento] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

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

  const dadosPreenchidos = () => {
    return nome && cpf &&  endereco && telefone && email && senha && confirmarSenha;
  };

  const handleCadastrarClick = () => {
    if (!dadosPreenchidos()) {
      setAvisoPreenchimento(true);
    } else {
      // Lógica para cadastro bem-sucedido
      alert('Cadastro realizado com sucesso!');
      // Redirecionamento para a página de login
      window.location.href = "/login";
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleCpfChange = (event) => {
    setCpf(event.target.value);
  };

  const handleEnderecoChange = (event) => {
    setEndereco(event.target.value);
  };

  const handleTelefoneChange = (event) => {
    setTelefone(event.target.value);
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
    <div className="design-tela-cadastro">
      <div>
        <Link to="/Home">
          <div className="logo-container">
            <img src="./assets/Logotipo Hot Steak.png" alt="Logotipo Hot Steak" />
          </div>
        </Link>

        <section>
          <h1 className="titulo-cadastro">FAÇA SEU CADASTRO</h1>
          <div className="cadastro-form">
            <input
              type="text"
              placeholder="Nome Completo: "
              className="red-input-filled"
              value={nome}
              onChange={handleNomeChange}
            />

            <input
              type="text"
              placeholder="CPF: "
              className="red-input-filled"
              value={cpf}
              onChange={handleCpfChange}
            />

            <input
              type="text"
              placeholder="Endereço: "
              className="red-input-filled"
              value={endereco}
              onChange={handleEnderecoChange}
            />

            <input
              type="text"
              placeholder="Telefone:  "
              className="red-input-filled"
              value={telefone}
              onChange={handleTelefoneChange}
            />

            <input
              type="text"
              placeholder="E-mail: "
              className="red-input-filled"
              value={email}
              onChange={handleEmailChange}
            />

            <input
              type="password"
              placeholder="Digite sua Senha:  "
              className="red-input-filled"
              value={senha}
              onChange={handleSenhaChange}
            />

            <input
              type="password"
              placeholder="Confirmar Senha: "
              className="red-input-filled"
              value={confirmarSenha}
              onChange={handleConfirmarSenhaChange}
            />

            {/* Exibe o aviso apenas se a senha foi tocada e o estado senhaAviso não estiver vazio */}
            {senhaTocada && senhaAviso && (
              <div className="senha-aviso">
                {senhaAviso}
              </div>
            )}

            <div className="botoes-form">
              <Link to="/login">
                <button
                  className="voltar-button"
                >
                  Voltar
                </button>
              </Link>

              <button
                className="cadastrar-button"
                onClick={handleCadastrarClick}
              >
                Cadastrar
              </button>
              {avisoPreenchimento && (
                <div style={{ color: 'red', marginBottom: '10px', fontFamily: 'Abel', marginTop: '20px' }}>
                  Por favor, preencha todos os campos antes de cadastrar.
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Cadastro;