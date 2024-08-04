//Versao alternativa
//function Pessoa(props){
//    return(
//        <div>
//            <img src= {props.foto} alt={props.nome}/>
//            <h2>Nome: {props.nome}</h2>
//            <p>Profissão: {props.profissao}</p>
//            <p>Idade: {props.idade}</p>
//        </div>
//    )
//}
//
//export default Pessoa

function Pessoa({foto,nome,profissao,idade}){
    return(
        <div>
            <img src= {foto} alt={nome}/>
            <h2>Nome: {nome}</h2>
            <p>Profissão: {profissao}</p>
            <p>Idade: {idade}</p>
        </div>
    )
}

export default Pessoa