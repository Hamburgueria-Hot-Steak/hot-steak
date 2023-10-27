import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Delivery from './components/pages/Delivery';
import Sobre from './components/pages/Sobre';
import Contato from './components/pages/Contato';
import Login from './components/pages/Login';
import Cadastro from './components/pages/Cadastro';
import TelaRecuperacaoSenha from './components/pages/TelaRecuperacaoSenha';
import TelaRecuperacaoSenhaCodigo from './components/pages/TelaRecuperacaoSenhaCodigo';
import TelaConfirmarSenha from './components/pages/TelaConfirmarSenha';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/home', element: <Home /> },
  { path: '/delivery', element: <Delivery /> },
  { path: '/sobre', element: <Sobre /> },
  { path: '/contato', element: <Contato /> },
  { path: '/login', element: <Login /> },
  { path: '/cadastro', element: <Cadastro /> },
  { path: '/TelaConfirmarSenha', element: <TelaConfirmarSenha /> }, // Adicionei a vírgula aqui
  {
    path: '/TelaRecuperacaoSenha',
    element: <TelaRecuperacaoSenha />,
  },
  {
    path: '/TelaRecuperacaoSenhaCodigo',
    element: <TelaRecuperacaoSenhaCodigo />,
  },
  {
    path: '/TelaConfirmarSenha',
    element: <TelaConfirmarSenha />,
  },
];

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
