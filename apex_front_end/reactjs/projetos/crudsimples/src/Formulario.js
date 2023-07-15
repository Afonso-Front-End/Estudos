import React from 'react'

export default class Formulario extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <form >
                <input className='form-control' type='text' value={this.props.nome} name='nome' placeholder='Nome' onChange={this.props.acaoTeclado} />
                <input className='form-control'  type='text' value={this.props.cidade} name='cidade' placeholder='Cidade' onChange={this.props.acaoTeclado}/>
                <input className='btn btn-primary' type='button' value='cadastrar' onClick={this.props.acao}/>
            </form>
        )
    }
}