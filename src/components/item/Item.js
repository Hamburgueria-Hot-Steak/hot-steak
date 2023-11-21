import styles from './Item.module.css'
import AddButtons from '../addButtons/AddButtons'

function Item(props){
    return(
        <div className={styles.item}>

            <div className={styles.divImage}>
                <img src={props.image} alt={props.alt}></img>
            </div>

            <section className={styles.itemDescription}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </section>

           <AddButtons price={props.price}/>
        </div>
    )
}

export default Item;