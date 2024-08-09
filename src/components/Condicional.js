import {useState} from 'react'

function Condicional (){

    const [email, setEmail] = useState()
    const [userEmail,setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        console.log(email)
    }

    function limparEmail(){
        
        setUserEmail('')
    }


    
    return(
        <div>
            <h2>Cadastre oseu e-mail: </h2>
            <form>
                <input type = 'email'
                placeholder = 'Digite o seu e-mail...'
                onChange={(e) => setEmail(e.target.value)} >
                
                </input>
                <button type= 'submit' onClick={enviarEmail}> Enviar </button>
                {userEmail && (
                    <div>
                        <p>O email do usuario eh : {userEmail}</p>
                        <button onClick={limparEmail}> Limpar campo</button>
                    </div>
                )}
             
            </form>
        </div>
       
    )

}

export default Condicional 