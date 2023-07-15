import React from 'react'

import ReactDOM from 'react-dom'

class Componente extends React.Component{
    // Contrutor
    constructor(props){
        super(props)

        this.state = {texto: this.props.textoInit}
    }

    // Funcao
    funcao = (elemento) => {
        this.setState({texto: elemento.target.value})
    }

    // Render 
    render(){
        return(
           <div>
                <h1>{this.state.texto}</h1>
                <input type='texte'onChange={this.funcao} value={this.state.texto}/>
           </div>
        )
    }
}

ReactDOM.render(<Componente textoInit='Digite algo'/>, document.getElementById('root'))