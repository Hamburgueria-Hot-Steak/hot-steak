import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {

  return (
    <div>
      <Link to="/Home"> {/* Define o destino da rota para a página inicial */}
        <div className="logo-container">
            <img src="./assets/Logo Hot Steak.png" alt="Logotipo Hot Steak" />
        </div>
      </Link>
      <div className="login-container">
        <div className="login-form">
          <p className="txt-login">FAÇA SEU LOGIN</p>
          <div className="form-email">
            <input type="text" placeholder="Email" className="red-input-filled" onfocus="clearInput(this)" />
            <input type="password" placeholder="Senha" className="red-input-filled" onfocus="clearInput(this)" maxlength="8" />
          </div>
          <button className="login-button">Entrar</button>
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
