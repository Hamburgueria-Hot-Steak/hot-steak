import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/pages/Home';
import Delivery from './components/pages/Delivery';
import Cadastro from './components/pages/Cadastro';

import Login from './components/pages/Login';

import TelaRecuperacaoSenha from './components/pages/TelaRecuperacaoSenha';
import TelaRecuperacaoSenhaCodigo from './components/pages/TelaRecuperacaoSenhaCodigo';
import TelaConfirmarSenha from './components/pages/TelaConfirmarSenha';
import TelaSenhaAlterada from './components/pages/TelaSenhaAlterada';
import TelaPagamento from './components/pages/TelaPagamento';
import OpcaoPixPagamento from './components/pages/OpcaoPixPagamento';
import OpcaoCartaoDebitoCredito from './components/pages/OpcaoCartaoDebitoCredito';
import OpcaoDinheiro from './components/pages/OpcaoDinheiro';
import TelaRastreio from './components/pages/TelaRastreio';
import PainelAdminComandas from './components/pages/PainelAdminComandas';
import PainelAdminEntregas from './components/pages/PainelAdminEntregas';
import PainelAdminProducao from './components/pages/PainelAdminProducao';

// Função de exemplo para verificar a autenticação
const isAuthenticated = () => {
  // Lógica para verificar se o usuário está autenticado
  // Retorna true se autenticado, false caso contrário
  // Aqui você pode usar o estado do seu aplicativo ou qualquer lógica de autenticação necessária
  return true; // Altere isso com sua lógica real
};

// ...

// Componente de rota privada
const PrivateRoute = ({ element, ...props }) => {
  if (!isAuthenticated()) {
    // Se não estiver autenticado, redirecione para a página de login
    return <Navigate to="/login" />;
  }

  // Se estiver autenticado, renderize o componente da rota
  return <Route {...props} element={element} />;
};


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        
        <Route path="/delivery" element={<Delivery />} />

        <Route path="/login" element={<Login />} />
        <Route path="/TelaRecuperacaoSenha" element={<TelaRecuperacaoSenha />} />
        <Route path="/TelaRecuperacaoSenhaCodigo" element={<TelaRecuperacaoSenhaCodigo />} />
        <Route path="/TelaConfirmarSenha" element={<TelaConfirmarSenha />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/TelaSenhaAlterada" element={<TelaSenhaAlterada />} />
        <Route path="/TelaPagamento" element={<TelaPagamento />} />
        <Route path="/OpcaoPixPagamento" element={<OpcaoPixPagamento />} />
        <Route path="/OpcaoCartaoDebitoCredito" element={<OpcaoCartaoDebitoCredito />} />
        <Route path="/OpcaoDinheiro" element={<OpcaoDinheiro />} />
        <Route path="/TelaRastreio" element={<TelaRastreio />} />
        <Route path="/PainelAdminComandas" element={<PainelAdminComandas />} />
        <Route path="/PainelAdminEntregas" element={<PainelAdminEntregas />} />
        <Route path="/PainelAdminProducao" element={<PainelAdminProducao />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
