import Item from "./Item";

function List(){
    return(
        <>
            <h1>
                <ul>
                    <Item marca="Ferrari" ano_lancamento={1998}/>
                    <Item marca="Fiat" ano_lancamento={2000}/>
                    <Item />
                </ul>
            </h1>
        </>
    )

}

export default List