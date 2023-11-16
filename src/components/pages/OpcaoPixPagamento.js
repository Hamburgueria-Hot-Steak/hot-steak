import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OpcaoPixPagamento.css';

function OpcaoPixPagamento() {
    const [chavePix, setChavePix] = useState('');
    const [aviso, setAviso] = useState('');
    const navigate = useNavigate(); // Usando useNavigate para obter a função de navegação

    const handleAvancarClick = () => {
        if (chavePix.trim() === '') {
            setAviso('É obrigatório preencher a Chave Pix');
        } else {
            // Lógica para avançar quando os dados estão preenchidos corretamente
            setAviso(''); // Limpa a mensagem de aviso
            // Navega para a próxima tela (TelaRastreio)
            navigate('/TelaRastreio');
        }
    };

    return (
        <div className="design-tela-opcao-pix-pagamento">
            <section className="section-opcao-pix">
                <h1 className="txt-inserir-pix">DIGITE O TELEFONE/EMAIL ASSOCIADO AO SEU PIX</h1>
                <input
                    type="text"
                    placeholder="Chave Pix: "
                    className="red-input-filled"
                    value={chavePix}
                    onChange={(e) => setChavePix(e.target.value)}
                />
                <button className="btn-avancar" onClick={handleAvancarClick}>
                    AVANÇAR
                </button>
                {aviso && <p className="aviso" style={{ color: 'red', fontFamily: 'Staatliches', fontSize: '20px' }}>{aviso}</p>}
            </section>
        </div>
    );
}

export default OpcaoPixPagamento;
