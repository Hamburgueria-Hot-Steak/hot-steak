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
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/delivery" element={<Delivery/>}></Route>
                <Route path="/sobre" element={<Sobre/>}></Route>
                <Route path="/contato" element={<Contato/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes;