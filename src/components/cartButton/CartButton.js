import { FaShoppingCart } from "react-icons/fa";
import styles from './CartButton.module.css'

function CartButton(){
    return(
        <button className={styles.cartButton}>
            <FaShoppingCart className={styles.cart}/>
            <span className={styles.cartStatus}>0</span>
        </button>
    )
}

export default CartButton;