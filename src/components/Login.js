import React, { useState, useEffect } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading'; // Importe o componente Loading

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showWarning, setShowWarning] = useState(false); // Adicione o estado para mostrar o aviso

  const handleLoginClick = () => {
    if (email === '' || password === '') {
      setShowWarning(true); // Mostra o aviso se os campos estiverem vazios
      alert('Preencha os campos!');
    } else {
      setShowWarning(false); // Oculta o aviso se o login for bem-sucedido
      alert('Login realizado com sucesso!');
    }
  };
  const [isLoading, setIsLoading] = useState(true);

  // Simule um tempo de carregamento
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Defina isLoading como false após o tempo de carregamento simulado de 2 segundos
    }, 2000); // Tempo de carregamento simulado de 2 segundos
  }, []);

  // Se isLoading for true, exibe o Loading
  if (isLoading) {
    return <Loading />;
  }

  // Se isLoading for false, exibe o conteúdo da página

  return (
    <div>
      <Link to="/Home">
        <div className="logo-container">
          <img src="./assets/Logo Hot Steak.png" alt="Logotipo Hot Steak" />
        </div>
      </Link>
      <div className="login-container">
        <div className="login-form">
          <p className="txt-login">FAÇA SEU LOGIN</p>
          <div className="form-email">
            <input
              type="text"
              placeholder="Email"
              className="red-input-filled"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Senha"
              className="red-input-filled"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              maxLength="8"
            />
          </div>
          <button className="login-button" onClick={handleLoginClick}>Entrar</button>
          <div className="links">
            <a href="">Esqueci minha senha</a>
            <a href="">Criar nova conta</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
