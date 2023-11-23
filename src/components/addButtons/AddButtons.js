import { useState } from 'react';
import styles from './AddButtons.module.css'
import Cart from '../cart/Cart'

function AddButtons({price}){

    const [counter, setCounter] = useState(0);

    const subtraction = () => {
        counter - 1 === - 1 ? setCounter(0) : setCounter(counter - 1)
    }

    return(
        <div className={styles.buttons}>
            <div className={styles.divCounter}>
                <button className={styles.buttonQtd} onClick={subtraction}>-</button>
                <span className={styles.counter}>{counter}</span>
                <button className={styles.buttonQtd} onClick={() => {setCounter(counter + 1)}}>+</button>
            </div>
            <button className={styles.buttonAdd}>Adicionar R${price.toFixed(2)} </button>
        </div>
    )
}

export default AddButtons;