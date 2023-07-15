import React from 'react'

import ReactDOM from 'react-dom'


class Componente extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.informacao.nome}</p>
                <p>{this.props.informacao.idade}</p>
            </div>
        )
    }
}
// Json
var dados = {nome:'Afonso', idade:24}

ReactDOM.render(<Componente informacao={dados}/>, document.getElementById('root'))