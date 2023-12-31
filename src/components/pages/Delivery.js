import { useState} from 'react';
import Item from '../item/Item'
import styles from './Delivery.module.css'
import Navbar from '../navbar/Navbar'
import Carousel from '../carousel/Carousel';
import Footer from '../footer/Footer'


function Delivery() {
    
    const [combos, setCombos] = useState([
        {
            id: 1,
            image: './assets/combo-hamburguer4.jpg',
            alt:'Foto do combo 3',
            title:'Combo Hot Junior',
            description:'Burguer 180g com bacon, alface e cebola caramelizada acompnhado de fritas e suco de laranja',
            price: 35.00
        },
        {
            id: 2,
            image:'./assets/combo-hamburguer1.jpg',
            alt:'Foto do Combo Hot Double',
            title:'Combo Hot Double',
            description:'2x Hot(Burguer 180g, cheddar, alface, cebola roxa e rúcula) compnhado de fritas e refrigerante',
            price: 40.00
        },
        {
            id: 3,
            image: './assets/combo-hamburguer3.jpg',
            alt: 'Foto Combo Hot New Classic',
            title: 'Combo Hot New Classic',
            description: 'Burguer 180g, molho epecial, alface, tomate, cebola roxa, picles e queijo suiço, acompanhado de batata frita e refrigerante',
            price: 37.50
        },
        {
            id: 4,
            image: './assets/combo-hamburguer2.jpg',
            alt:'Foto do Combo Triple Hot Steak',
            title:'Combo Triple Hot Steak',
            description:'3x Hot Classic (Dois burguers de 90g, alface, tomate, cebola roxa, picles, cheddar e molho especial',
            price: 35.00
        },
        {
            id: 5,
            image:'./assets/combo-hamburguer5.jpg',
            alt:'Foto combo Hot Classic',
            title:'Combo Hot Classic',
            description:'Dois burguers de 90g, alface, tomate, cebola roxa, picles, cheddar e molho especial, acompanhado de batata frita e refrigerente',
            price: 40.00
        },
        {
            id: 6,
            image: './assets/combo-hamburguer6.png',
            alt: 'Foto combo 3',
            title: 'Combo 3',
            description: 'Dois burguers de 90g, alface, cebola, bacon e cheddar, acompanhado de batata frita e suco de laranja',
            price: 37.50
        }
    ]);

    const [burguers, setBurguers] = useState([
        {
            id: 1,
            image: './assets/Hamburguer-1.webp',
            alt: 'Foto Especial Hot Steak',
            title: 'Special Hot Steak',
            description: 'Dois Burguer bovinos 180g, tomate, alface, cebola roxa e queijo cheddar no pão brioche',
            price: 34.00
        },
        {
            id: 2,
            image: './assets/opcao-cheddar-bacon-hamburgueres.png',
            alt: 'Foto do sanduíche Cheddar e Bacon',
            title: 'Cheddar e Bacon',
            description: 'Burguer de costela 180g, fatias de bacon e fatias de queijo cheddar no pão australiano',
            price: 29.00
        },
        {
            id: 3,
            image: './assets/opcao-hamburguer-mega.webp',
            alt: 'Foto do sanduíche Mega',
            title: 'Mega',
            description: 'Burguer bovino 180g, fatias queijo suiço, tomate, alface e cebola no pão brioche',
            price: 26.00
        },
        {
            id: 4,
            image: './assets/opcao-hotfrango-hamburgueres.png',
            alt: 'Foto do sanduíche Hot Frango',
            title: 'Hot Frango',
            description: 'Burguer de frango 180g, alface, tomate no pão francês',
            price: 28.00
        },
        {
            id: 5,
            image: './assets/opcao-black-burguer-hamburgueres.jpg',
            alt: 'Foto do sanduíche black burguer',
            title: 'Black Burguer',
            description: 'Burguer de costela 180g, queijo suíço, alface e molho de gorgonzola no pão brioche',
            price: 30.00
        },
        {
            id: 6,
            image: './assets/opcao-x-tudo.jpeg',
            alt: 'Foto do sanduíche X-Tudo',
            title: 'X-Tudo',
            description: 'Burguer bovino 180g, fatias de bacon, alface, tomate, cebola roxa, queijo suiço no pão brioche',
            price: 29.00
        }
    ])

    const [sideD, setSideD] = useState([
        {
            id: 1,
            image: './assets/opcao-batata-frita-acompanhamentos.png',
            alt: 'Foto batata frita',
            title: 'Batata Frita',
            description: '100g de Batata frita bem crocante e saborosa',
            price: 14
        },
        {
            id: 2,
            image: './assets/opcao-macaxeira-frita-acompanhamentos.jpeg',
            alt: 'Foto Macaxeira Frita',
            title: 'Macaxeira Frita',
            description: '100g de Macaxeira frita bem crocante e saborosa',
            price: 15
        },
        {
            id: 3,
            image: './assets/opcao-nuggets-frango-acompanhamentos.jpg',
            alt: 'Foto Nuggets de Frango',
            title: 'Nuggets de Frango',
            description: '150g de Nuggets de frango bem crocante e saboroso',
            price: 17
        },
        {
            id: 4,
            image: './assets/bebidas-coca-cola.jpg',
            alt: 'Foto Refrigerante Coca-Cola',
            title: 'Coca-Cola',
            description: 'Refrigerante Coca-Cola',
            price: 14
        },
        {
            id: 5,
            image: './assets/bebidas-limonada.jpg',
            alt: 'Foto Limonada',
            title: 'Limonada',
            description: 'Limonada deliciosa feita com limões frescos para acompanhar seu lanche',
            price: 15
        },
        {
            id: 6,
            image: './assets/bebidas-suco-laranja.jpg',
            alt: 'Foto Suco de Laranja',
            title: 'Nuggets de Frango',
            description: 'Suco de larnja feito com laranjas frescas para acompanhar seu lanche',
            price: 17
        }

    ])
    return(
        <div className={styles.main}>
            <Navbar/>
            
            <Carousel/>

            {/* Sessão de combos */}
            <section className={styles.combos}>
                <h2 className={styles.title}>Combos</h2>
                <div className={styles.combosItens}>
                    {combos.map((item)=> <Item key={item.id} image={item.image} alt={item.alt} title={item.title} description={item.description} price={item.price}/>)}
                </div>
            </section>

            {/* Sessão de sanduíches */}
            <section className={styles.burguers}>
                <h2 className={styles.title}>Sanduíches</h2>
                <div className={styles.burguersItens}>
                    {burguers.map((item) => <Item key={item.id} {...item}/>)}
                </div>
            </section>

            <section className={styles.sideDishes}>
                <h2 className={styles.title}>Bebidas e Acompanhamentos</h2>
                <div className={styles.sideDishesItens}>
                    {sideD.map((item) => <Item key={item.id} {...item}/>)}
                </div>
            </section>

            {/* <Cart /> */}

            <Footer/>

        </div>
    )
}


export default Delivery;