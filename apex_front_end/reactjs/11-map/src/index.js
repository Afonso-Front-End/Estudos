import React from 'react'

import ReacDOM from 'react-dom'


class Componente extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            produtos: [
                {'nome':'Arroz','valor':8},
                {'nome':'Feijão','valor':10},
                {'nome':'Milho','valor':18},
                {'nome':'Farinha','valor':9},
                {'nome':'Ervilha','valor':2},
                {'nome':'Suco','valor':5}
            ]
        }
    }

    render(){
        return(
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Nome</td>
                        <td>Valor</td>
                    </tr>
                </thead>

                <tbody>
                    {this.state.produtos.map((obejto, linha) => (
                        <tr>
                            <td>{linha}</td>
                            <td>{obejto.nome}</td>
                            <td>{obejto.valor}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}

ReacDOM.render(<Componente/>, document.getElementById('root'))