import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OpcaoDinheiro.css';

function OpcaoDinheiro() {
    const [aviso, setAviso] = useState('');
    const navigate = useNavigate(); // Usando useNavigate para obter a função de navegação

    const handleAvancarClick = () => {
        const quantiaDinheiro = document.querySelector('.red-input-filled').value;

        if (!quantiaDinheiro.trim()) {
            setAviso('É obrigatório preencher a quantia em dinheiro.');
        } else {
            // Lógica para avançar quando os dados estão preenchidos corretamente
            setAviso(''); // Limpa a mensagem de aviso
            // Navega para a próxima tela (substitua '/tela-desejada' pela rota desejada)
            navigate('/TelaRastreio');
        }
    };

    return (
        <div className="design-tela-opcao-dinheiro">
            <section className="section-opcao-dinheiro">
                <h1 className="txt-quantia-dinheiro">DIGITE UMA QUANTIA EM DINHEIRO</h1>
                <input
                    type="text"
                    placeholder="Digite um valor em R$"
                    className="red-input-filled"
                />
                <button className="btn-avancar" onClick={handleAvancarClick}>
                    AVANÇAR
                </button>
                {aviso && <p className="aviso" style={{ color: 'red', fontFamily: 'Staatliches', fontSize: '20px' }}>{aviso}</p>}
            </section>
        </div>
    );
}

export default OpcaoDinheiro;
