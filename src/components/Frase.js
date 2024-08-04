import SayMyName from './SayMyName.js';
import styles from './Frase.module.css'

function Frase(){
    return(
        <div className={styles.fraseContainer}>
            <p>
                Eai meu chapa, estou chamando a função frase
            </p>
            <SayMyName nome="Lucas" />
        </div>
    )
}

export default Frase 