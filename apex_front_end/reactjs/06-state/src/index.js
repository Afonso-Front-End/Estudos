import React from 'react'

import ReactDOM from 'react-dom'

// componente
class Componete extends React.Component{
    // construtor
    constructor(props){
        super(props)

        this.state = {nome:'Afonso'}
    }

    // render 
    render(){
        return(
            <h1>{this.state.nome}</h1>
        )
    }
}

ReactDOM.render(<Componete/>, document.getElementById('root'))