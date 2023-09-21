import React from 'react';
import Home from './components/Home';
import Delivery from './components/Delivery';
import Sobre from './components/Sobre';
import Contato from './components/Contato';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
            </Routes>
        </Router>
    );
}

export default AppRoutes;
