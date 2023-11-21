import './TelaRastreio.css';
import { Link } from 'react-router-dom';

function TelaRastreio () {
    return (
        <div className="design-tela-rastreio">
            <section className="section-rastreio-pedido">
                <h1 className="txt-acompanhe-seu-pedido">ACOMPANHE SEU PEDIDO:</h1>

                <p className="txt-pedido-aceito">✅ SEU PEDIDO FOI ACEITO PELO RESTAURANTE</p>
                <p className="txt-horario-pedido-gerado">Hoje, 23/11/23 às 16:00</p>
                
                <p className="txt-pedido-pronto-entrega"> ✅ SEU PEDIDO ESTÁ SENDO PREPARADO E LOGO SAIRÁ PARA A ENTREGA</p>
                <p className="txt-horario-pedido-pronto-entrega">Hoje, 23/11/2023 às 16:10</p> 
                
                <p className="txt-pedido-indo">⚠️ SEU PEDIDO ESTÁ INDO ATÉ VOCÊ!</p>
                <p className="txt-horario-pedido-indo">Hoje, 23/11/2023 às 18:00</p>
                <Link to="/Home">
                    <button className="avancar-button">TELA INICIAL</button>
                </Link>
            </section>
        </div>
    )
}

export default TelaRastreio;