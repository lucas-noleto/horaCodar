import Frase from "./Frase"
import '../App.css'
import List from "./List"

function HelloWorld(){
    return(
        <div className="App">
            <p>
                Meu primeiro componente
                <Frase />
                <List />
            </p>
        </div>
    )
}

export default HelloWorld