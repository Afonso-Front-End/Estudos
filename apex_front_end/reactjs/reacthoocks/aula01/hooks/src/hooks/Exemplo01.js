import { useState } from "react";

const Exemplo = () => {
    // State de exibição
    const [texto, setTexto] = useState('')

    // State de alteração

    // Retorno
    return(
        <div>
            <input type="text" placeholder="Digite algo" onChange={e => {setTexto(e.target.value)}}/>
            <p>{texto ? texto : 'Digite algo'}</p>
            
        </div>
    )
}

//Exportar
export default Exemplo;