import React from 'react'

import ReactDOM from 'react-dom'

class Componente extends React.Component{
    teclado = (event) => {
        console.log(event.target.value)
    }

    render(){
        return(
            <di>
                <input type='text' placeholder='Digite um nome' onChange={this.teclado}/>
            </di>
        )
    }
}
ReactDOM.render(<Componente/>, document.getElementById('root'))