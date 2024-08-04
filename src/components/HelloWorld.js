import Frase from "./Frase"
import '../App.css'

function HelloWorld(){
    return(
        <div className="App">
            <p>
                Meu primeiro componente
                <Frase />
            </p>
        </div>
    )
}

export default HelloWorld