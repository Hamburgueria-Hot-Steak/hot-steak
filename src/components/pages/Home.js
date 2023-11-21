
import {useState, useEffect} from 'react';
import NavBar from '../navbar/Navbar'
import styles from './Home.module.css'
import MainSobre from '../mainSobre/MainSobre';
import{GiFrenchFries, GiTomato} from 'react-icons/gi'
import{FaHamburger} from 'react-icons/fa'
import{MdDeliveryDining} from 'react-icons/md' 
import Footer from '../footer/Footer'
import Loading from '../loading/Loading';

function Home(){

    const [isLoading, setIsLoading] = useState(true);

  // Simule um tempo de carregamento
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Tempo de carregamento simulado de 2 segundos
  }, []);

    return(
        <div>
            {isLoading ? (
        <Loading />
      ) : (
        // Se isLoading for false, exibe o conteúdo da página
        <header className={styles.header}>
            <NavBar/>
        </header>
      
      )}

            <MainSobre/>
            
            {/* WELCOME SESSION */}
            <section className={styles.sectionWelcome}>
                <h2 className={styles.secWelcomeTitle}>
                    Bem Vindo à <br/>Hot Steak! {/*<FontAwesomeIcon icon={faBurger} />*/} 
                </h2>
        
                <p className={styles.pWelcome}>
                 O refúgio gastronômico fundado em 2023, situado no coração de Maceió, Alagoas. Somos mais do que uma simples hamburgueria; 
                 somos uma experiência culinária que nasceu da paixão por sabores excepcionais.
                </p>
            </section>

            {/* DELIVERY SESSION */}
            <section className={styles.sectionDelivery}>
                <div className={styles.secDeliveryDiv}>
                    <h2 className={styles.secDeliveryTitle}>
                     A Refeição Perfeita <br/>  na Sua Porta <br/> <MdDeliveryDining/>
                    </h2>
                    <p className={styles.pDelivery}>
                    A Hot Steak está sempre ao alcance dos amantes da boa comida. Faça seu pedido com apenas alguns cliques através do nosso site e traga a 
                    experiência Hot Steak para a comodidade do seu lar. Entregamos sabor e qualidade diretamente à sua porta, tornando cada refeição uma celebração do prazer gastronômico.
                    </p>
                    <a href='./Delivery'>
                    <button className={styles.buttonAboutDelivery}>Faça seu pedido</button>
                    </a>
                </div>
            </section>

            {/* PRODUCTS SESSION */}
            <section className={styles.SectionAboutProducts}>
                
                <h2 className={styles.aboutProductsTitle}>Nossa Cozinha</h2>

                <div className={styles.aboutProductsContainer}>

                    <div className={styles.aboutItens}>
                        <FaHamburger className={styles.icons}/>
                        {/* <h3 className={styles.productName}>Hamburguer</h3> */}
                        <p className={styles.pProducts}> Nossos burguers são uma obra-prima de carne suculenta, cuidadosamente temperada e grelhada para a perfeição. Acompanhado 
                        de ingredientes frescos e molhos exclusivos, este hambúrguer é uma explosão de sabores que transforma cada refeição em uma experiência memorável.</p>
                    </div>
        
                    <div className={styles.aboutItens}>
                        {/* <h3 className={styles.productName}>Batatas</h3> */}
                        <GiFrenchFries className={styles.icons}/>
                        <p className={styles.pProducts}>Nossas batatas fritas são o acompanhamento perfeito para elevar sua experiência gastronômica. Cortadas e fritas no ponto 
                        certo para obter a crocância ideal por fora e a maciez irresistível por dentro. Tempere a gosto ou mergulhe em nossos molhos exclusivos para uma combinação 
                        de sabores que fará você querer mais a cada mordida.</p>
                    </div>
                    
                    <div className={styles.aboutItens}>
                        {/* <h3 className={styles.productName}>Nuggets</h3> */}
                        <GiTomato className={styles.icons}/>
                        <p className={styles.pProducts}> Nossos vegetais frescos, provenientes dos melhores produtores locais, são a estrela dos nossos lanches. Da crocante alface à 
                        explosão de sabor do tomate maduro, cada mordida oferece uma experiência vibrante e natural. Preparamos nossos vegetais com o mesmo cuidado que você teria no 
                        seu jardim, garantindo que cada lanche seja uma celebração da frescura e da qualidade que só a Hot Stake proporciona.</p>
                    </div>
                </div>
            </section>

            <Footer/>
            
    </div>
  );
};


export default Home;

