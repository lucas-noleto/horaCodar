function Pessoa(props){
    return(
        <div>
            <img src= {props.foto} alt={props.nome}/>
            <h2>Nome: {props.nome}</h2>
            <p>Profissão: {props.profissao}</p>
            <p>Idade: {props.idade}</p>
        </div>
    )
}

export default Pessoa