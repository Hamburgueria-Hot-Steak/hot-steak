import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../components/loading/Loading';
import { request } from '../../api/request';
import '../../components/pages/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const loginButtonRef = useRef(null);
  const forgotPasswordLinkRef = useRef(null);
  const createAccountLinkRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate(); // Utilize useNavigate para obter a função de navegação

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userData = await request.getUsers();
        setUsers(userData);
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleLoginClick = async () => {
    if (email === '' || password === '') {
      setShowWarning(true);
      alert('Preencha os campos!');
    } else {
      setShowWarning(false);
  
      const userFound = users.find((user) => user.email === email && user.password === password);
  
      if (!userFound) {
        if (email === 'admin' && password === '1234') {
          // Redirecionar para o PainelAdmin
          alert('Login realizado com sucesso como administrador!');
          navigate('/PainelAdminComandas'); 
        } else {
          // Redirecionar para outra página
          alert('Login realizado com sucesso!');
          navigate('/TelaPagamento');
        }
      } else {
        alert('Login e/ou senha incorretas. Tente novamente.');
      }
    }
  };  

  const handleTabKeyPress = (e) => {
    // Lógica de tabulação
  };

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
              <p className="txt-login">LOGIN</p>
              <div className="form-email" style={{ textAlign: 'center' }}>
                <input
                  type="text"
                  placeholder="Email"
                  className="red-input-filled placeholder-small"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  ref={emailInputRef}
                  onKeyDown={handleTabKeyPress}
                  tabIndex="1"
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
                  tabIndex="2"
                />
              </div>
              <button
                className="login-button"
                onClick={handleLoginClick}
                ref={loginButtonRef}
                onKeyDown={handleTabKeyPress}
                tabIndex="3"
              >
                Logar
              </button>
              <div className="links">
                <Link to="/TelaRecuperacaoSenha">
                  <a
                    href=""
                    ref={forgotPasswordLinkRef}
                    onKeyDown={handleTabKeyPress}
                    tabIndex="4"
                  >
                    Esqueci minha senha
                  </a>
                </Link>
                <Link to="/Cadastro">
                  <a
                    href=""
                    ref={createAccountLinkRef}
                    onKeyDown={handleTabKeyPress}
                    tabIndex="5"
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
};

export default Login;
