import { useEffect, useState } from "react"

export default function  Exemplo_useEfect02 (){
    // State
    const [texto, setTexo] = useState('Aprendendo useEfect')

    // Ciclo de vida
    useEffect(()=>{
        setTimeout(()=>{
            setTexo('UseEfect executado')
        },1000)
    })

    // Retorno
    return(

        <h1>{texto}</h1>
    )
}



