import styles from './Cart.module.css'
import CartItem from '../cartItem/CartItem';

function Cart(){
    return(
        <section className={styles.cart}>

            <div className={styles.cartItens}> 
                <CartItem data={{title:'titulo', price:'dsds', image:'sdffd'}}/>
            </div>

            <div className={styles.cartTotal}>resumo do carrinho</div>

         </section>
    )
}

export default Cart;