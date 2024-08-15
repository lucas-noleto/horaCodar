function SeuNome( {setNome} ){


return(

    <div>
        <p>Digite o seu nome:</p>
        <input type ="text" placeholder="Qual eh seu nome?" onChange={(e) => setNome(e.target.value)} ></input>
    </div>
)

}

export default SeuNome