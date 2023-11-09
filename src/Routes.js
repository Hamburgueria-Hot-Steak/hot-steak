import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Cadastro from './components/pages/Cadastro';
import TelaRecuperacaoSenha from './components/pages/TelaRecuperacaoSenha';
import TelaRecuperacaoSenhaCodigo from './components/pages/TelaRecuperacaoSenhaCodigo';
import TelaConfirmarSenha from './components/pages/TelaConfirmarSenha';
import TelaSenhaAlterada from './components/pages/TelaSenhaAlterada';

const AppRoutes = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/TelaRecuperacaoSenha" element={<TelaRecuperacaoSenha />} />
        <Route path="/TelaRecuperacaoSenhaCodigo" element={<TelaRecuperacaoSenhaCodigo />} />
        <Route path="/TelaConfirmarSenha" element={<TelaConfirmarSenha />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/TelaSenhaAlterada" element ={<TelaSenhaAlterada />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;