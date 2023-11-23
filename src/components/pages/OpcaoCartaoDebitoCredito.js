import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OpcaoCartaoDebitoCredito.css';

function OpcaoCartaoDebitoCredito() {
    const [aviso, setAviso] = useState('');
    const navigate = useNavigate(); // Usando useNavigate para obter a função de navegação

    const handleAvancarClick = () => {
        const numeroCartao = document.querySelector('.red-input-filled').value;

        if (!numeroCartao.trim()) {
            setAviso('É obrigatório preencher o número do cartão de crédito/débito e o valor em R$.');
        } else {
            // Lógica para avançar quando os dados estão preenchidos corretamente
            setAviso(''); // Limpa a mensagem de aviso
            // Navega para a próxima tela (substitua '/tela-desejada' pela rota desejada)
            navigate('/TelaRastreio');
        }
    };

    return (
        <div className="design-tela-opcao-cartao-debito-credito">
            <section className="section-opcao-cartao">
                <h1 className="txt-inserir-cartao">CARTÃO DE CRÉDITO/DÉBITO:</h1>
                <input
                    type="text"
                    placeholder="Nº do seu cartão de crédito/débito: "
                    className="red-input-filled"
                />

                <input
                    type="text"
                    placeholder="Digite um valor em R$: "
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

export default OpcaoCartaoDebitoCredito;
