import styles from './MainSobre.module.css';
import TypeWriter from 'typewriter-effect'

function MainSobre(){

    return(
        <main className={styles.main}>
            <div className={styles.imageBackgroundDiv}>
                <h2 className={styles.tpw}>
                    Hot Steak é
                    <TypeWriter
                    options={{
                        strings: ['Experiência inigualável','Explosão de sabores', 'ingredientes de alta qualidade', 'Sabor autêntico'],
                        autoStart: true,
                        loop: true,
                    }}/>
                </h2>
            </div>    
        </main>
    )
}

export default MainSobre;