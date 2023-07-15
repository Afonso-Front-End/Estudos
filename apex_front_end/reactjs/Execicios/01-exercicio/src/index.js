import React from 'react'

import ReactDOM from 'react-dom'

class Componente extends React.Component {
    // Contrutor
    constructor(props) {
        super(props)

        this.state = {
            nome: this.props.nome,
            idade: '',
            email: '',
            tudoPrenchido : false
        }
    }

    // Funcao
    funcao = (elemento) => {
        this.setState({ [elemento.target.name]: elemento.target.value })
        setTimeout(()=>{
            if (this.state.nome != '' || this.state.idade != '' || this.state.email != '') {
                this.setState({tudoPrenchido: true})
            }else{
                this.setState({tudoPrenchido: false})
            }
        }, 10)
    }

    // Render 
    render() {
        return (
            <div>
                {
                    this.state.tudoPrenchido == false ?
                        <h1>Favor prencher todos os campos</h1> :
                        <div>
                            <h1>Helo {this.state.nome}</h1>
                            <h1>Idade {this.state.idade}</h1>
                            <h1>E-mail {this.state.email}</h1>
                        </div>
                }

                <input type='text' onChange={this.funcao} name='nome' value={this.state.nome} />
                <input type='number' onChange={this.funcao} name='idade' value={this.state.idade} />
                <input type='email' onChange={this.funcao} name='email' value={this.state.email} />
            </div>
        )
    }
}

ReactDOM.render(<Componente />, document.getElementById('root'))