import styles from './CartItem.module.css'
import { MdRemoveShoppingCart } from "react-icons/md";

function CartItem({data}){

    const {image, title, price} = data;


    return(
        <section className={styles.cartItem}>
            <img 
            src={image }
            alt="Imagem do produto"
            className={styles.cartItemImage}
            />

            <div className={styles.carItemContent}>
                <h3 className={styles.cartItemTitle}>{title}</h3>
                <h3 className={styles.cartItemPrice}>{price}</h3>

                <button type="button" className={styles.buttonRemoveItem}>
                    <MdRemoveShoppingCart/>
                </button>
            </div>


        </section>
    )
}

export default CartItem;