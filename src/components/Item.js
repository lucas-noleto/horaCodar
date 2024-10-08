import PropTypes from 'prop-types'

function Item({marca,ano_lancamento}){
    return(
        <>
            <li>
                {marca} - {ano_lancamento}
            </li>
        </>
    )
}


Item.prototype = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number.isRequired,
}

Item.defaultProps = {
    marca: 'Faltou marca',
    ano_lancamento: 0,
}
export default Item