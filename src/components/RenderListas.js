
function RenderLista({listas}){
    
    
    return(
        <>
            <h2>Lista de coisas boas</h2>

            
             {listas.length > 0 ? (
                listas.map((lista,index) => (
                <p key = {index} > {lista}</p>
                )
            )):
            <p>
                Nao tem itens na lista
            </p>
            }   
            
        </>
    )
}

export default RenderLista