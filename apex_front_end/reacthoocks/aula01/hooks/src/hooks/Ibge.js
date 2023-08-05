// import { response } from "express";
// import { response } from "express";
import { useEffect, useState } from "react";

export default function Ibge(){
    const [estados, setEstados] = useState([])
    const [cidades, setCidades] = useState([])

    
    const getEstados = async () => {
        const urlEstado = await fetch('https://brasilapi.com.br/api/ibge/uf/v1')
        const dadosEstado = await urlEstado.json()
        setEstados(dadosEstado)

    }

    const getCidades = async (estados) => {
        const urlCidade = await fetch(`https://brasilapi.com.br/api/ibge/municipios/v1/${estados}?providers=dados-abertos-br,gov,wikipedia`)
        const dadosCidade = await urlCidade.json()
        setCidades(dadosCidade)
    }
    
    useEffect(()=>{
       getEstados()
    })

    return(
        <div>
            {/* <select>
                
            </select> */}

            <select onChange={(e)=> {getCidades(e.target.value)}}>
                {estados.map(e => (<option>{e.sigla}</option>))}
            </select>

            <select>
                {cidades.map(e => (
                    <option>{e.nome}</option>
                ))}
            </select>
        </div>
    )
    
}