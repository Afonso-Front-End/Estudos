import React from 'react'

import  ReactDOM  from 'react-dom'

class Componente extends React.Component{
    // funcao
    mensagem(nome){
        alert('Ola ' + nome)
        console.log(this)
    }

    // Render
    render(){
        return(
            <button onClick={this.mensagem.bind(this, 'Afonso')}>Clique aque</button>
        )
    }
}

ReactDOM.render(<Componente/>, document.getElementById('root'))