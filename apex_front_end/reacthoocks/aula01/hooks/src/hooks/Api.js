import { useState } from "react";

export default function Api(){
    const [cep, setCep] = useState()
    const [dados, seteDados] = useState([])

    // useEffect(()=>{
    //     fetch('https://viacep.com.br/ws/01001000/json/')
    //     .then(response => response.json())
    //     .then(retorno => seteDados(retorno))
    // })

    function buscarCep() {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(retorno => seteDados(retorno))
    }

    return(
        <div>
            <input type="number" placeholder="Digite um cep" onChange={e => {setCep(e.target.value)}}/>
            <button onClick={()=> {buscarCep()}}>Buscar cep</button>
            <p>Bairro {dados.bairro}</p>
            <p>Cidade {dados.localidade}</p>
            <p>Logradouro {dados.logradouro}</p>
        </div>
    )
    
}