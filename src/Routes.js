import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/pages/Home';
import Delivery from './components/pages/Delivery';
import Sobre from './components/pages/Sobre';
import Contato from './components/pages/Contato';
import Login from './components/pages/Login';
import Cadastro from './components/pages/Cadastro';
import TelaRecuperacaoSenha from './components/pages/TelaRecuperacaoSenha';
import TelaRecuperacaoSenhaCodigo from './components/pages/TelaRecuperacaoSenhaCodigo';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Rota raiz para o componente Home */}
        <Route path="/" element={<Home />} />

        {/* Outras rotas */}
        <Route path="/home" element={<Home />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/TelaRecuperacaoSenha" element={<TelaRecuperacaoSenha />} />
        <Route path="/TelaRecuperacaoSenhaCodigo" element={<TelaRecuperacaoSenhaCodigo />} />
        
        {/* Adicione a rota de redirecionamento condicional aqui */}
        <Route
          path="/TelaRecuperacaoSenha"
          element={<Navigate to="/TelaRecuperacaoSenhaCodigo" />}
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
