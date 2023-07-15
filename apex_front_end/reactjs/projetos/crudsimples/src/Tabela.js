import React from 'react'

export default class Tabela extends React.Component{

    constructor(props){
        super(props)

        this.state = {termo:''}
    }

    render(){
        return(
            <div className='tabela'>
                <p>{this.state.termo}</p>
                <input type='text' placeholder='Digite um nome' className='form-control' onChange={(campo) => {this.setState({termo:campo.target.value})}}/>

                <table className='table'>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>Nome</td>
                            <td>Cidade</td>
                            <td>Remover</td>
                        </tr>
                    </thead>

                    <tbody > 
                        
                    {this.props.dados.filter(obj => obj.nome.toLowerCase().includes(this.state.termo.toLowerCase())).map((obejto, linha) => (
                            <tr>
                                <td>{linha}</td>
                                <td>{obejto.nome}</td>
                                <td>{obejto.cidade}</td>
                                <td><button className='btn btn-danger' onClick={() => {this.props.acao(linha)}}>Remover</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}