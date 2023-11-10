import React, { useState, useEffect, useRef } from 'react';
import '../../components/pages/Login.css';
import { Link } from 'react-router-dom';
import Loading from '../../components/loading/Loading';
import request from '../../api/request';

// const request = require('../../api/request');

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const loginButtonRef = useRef(null);
  const forgotPasswordLinkRef = useRef(null);
  const createAccountLinkRef = useRef(null);

  const handleLoginClick = () => {
    if (email === '' || password === '') {
      setShowWarning(true);
      alert('Preencha os campos!');
    } else {
      setShowWarning(false);
      alert('Login realizado com sucesso!');
    }
  };

  const handleTabKeyPress = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      if (document.activeElement === emailInputRef.current) {
        passwordInputRef.current.focus();
      } else if (document.activeElement === passwordInputRef.current) {
        loginButtonRef.current.focus();
      } else if (document.activeElement === loginButtonRef.current) {
        forgotPasswordLinkRef.current.focus();
      } else if (document.activeElement === forgotPasswordLinkRef.current) {
        createAccountLinkRef.current.focus();
      } else if (document.activeElement === createAccountLinkRef.current) {
        emailInputRef.current.focus();
      }
    }
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="design-tela-login">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Link to="/Home">
            <div className="logo-container">
              <img src="./assets/Logotipo Hot Steak.png" alt="Logotipo Hot Steak" />
            </div>
          </Link>
          <div className="login-container">
            <div className="login-form">
              <p className="txt-login">FAÇA SEU LOGIN</p>
              <div className="form-email" style={{ textAlign: 'center' }}>
                <input
                  type="text"
                  placeholder="Email"
                  className="red-input-filled placeholder-small"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  ref={emailInputRef}
                  onKeyDown={handleTabKeyPress}
                  tabIndex="1" // Ordem de tabulação
                />
                <input
                  type="password"
                  placeholder="Senha"
                  className="red-input-filled placeholder-small"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  maxLength="8"
                  ref={passwordInputRef}
                  onKeyDown={handleTabKeyPress}
                  tabIndex="2" // Ordem de tabulação
                />
              </div>
  
              <button
                className="login-button"
                onClick={handleLoginClick}
                ref={loginButtonRef}
                onKeyDown={handleTabKeyPress}
                tabIndex="3" // Ordem de tabulação
              >
                Logar
              </button>
              <div className="links">
                <Link to="/TelaRecuperacaoSenha">
                  <a
                    href=""
                    ref={forgotPasswordLinkRef}
                    onKeyDown={handleTabKeyPress}
                    tabIndex="4" // Ordem de tabulação
                  >
                    Esqueci minha senha
                  </a>
                </Link>
  
                <Link to="/Cadastro">
                  <a
                    href=""
                    ref={createAccountLinkRef}
                    onKeyDown={handleTabKeyPress}
                    tabIndex="5" // Ordem de tabulação
                  >
                    Criar nova conta
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Login;
