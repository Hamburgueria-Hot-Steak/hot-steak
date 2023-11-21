import {FaInstagram, FaFacebookF} from "react-icons/fa"
import {FaXTwitter} from "react-icons/fa6"
import styles from './Footer.module.css'

function Footer(){
    return(
            <footer className={styles.footer}>
               
                <img src="./assets/Logo Hamburgueria Hot Steak Miniatura.png" alt="Hot Steak logo" className={styles.imgFooter}></img>
                
                <div className={styles.divContact}>

                    <h4>VISITE-NOS NAS REDES SOCIAIS:</h4>
                    
                    <ul className={styles.list}>

                        <li className={styles.itemList}> 
                            <a href="https://www.instagram.com/" alt="Instagram link" title="Instagram" target="_blank" rel="external">
                                <FaInstagram className={styles.icons}/>
                            </a>
                        </li>

                        <li className={styles.itemList}>
                            <a href="https://www.facebook.com/?locale=pt_BR" alt="Facebook link" title="Facebook" target="_blank" rel="external">
                                <FaFacebookF className={styles.icons}/>
                            </a>
                        </li>

                        <li className={styles.itemList}>
                            <a href="https://twitter.com/?lang=pt" alt="TwitterX link" title="TwitterX" target="_blank" rel="external">
                                <FaXTwitter className={styles.icons}/>
                            </a>
                        </li>

                    </ul>

                </div>

                <section className={styles.navFooter}>
                        <ul>
                            <li><a href="./Home">HOME</a></li>
                            <li><a href="./Delivery">DELIVERY</a></li>
                            <li><a href="./Contato">CONTATO</a></li>
                        </ul>
                    </section>

            </footer>
    )
}
export default Footer;