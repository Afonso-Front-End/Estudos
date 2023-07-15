import React from 'react'

// Impotar formulario
import Formulario from './Formulario'

// Importar Tabela
import Tabela from './Tabela'

// Inportar css
import './style.css'

export default class Principal extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            nome: '',
            cidade: '',
            vetor: []
        }
    }
    cadastro = () => {
        let pessoa = {
            'nome': this.state.nome,
            'cidade': this.state.cidade,
        }

        // criar copia do vetor
        let vetor_temp = [...this.state.vetor]

        // Adicionar novo registro no vetor temporario
        vetor_temp.push(pessoa)

        // Alterar vetor
        this.setState({vetor:vetor_temp})

        // Limpar elemento
        this.setState({nome:'', cidade:''})

        // alert(JSON.stringify(pessoa))b
    }

    teclado = (objeto) => {
        this.setState({[objeto.target.name]: objeto.target.value})
    }

    // Remover cadastro
    remover = (index) => {
        let vetor_remove = [...this.state.vetor]

        vetor_remove.splice(index, 1)

        this.setState({vetor:vetor_remove})
    }

    render(){
        return(
            <div>
                <Formulario acao={this.cadastro} acaoTeclado={this.teclado} nome={this.state.nome} cidade={this.state.cidade}/>
                {/* <p>Nome: {this.state.nome}</p> */}
                {/* <p>Cidade: {this.state.cidade}</p> */}
                {/* <p>{JSON.stringify(this.state.vetor)}</p> */}
                <Tabela dados={this.state.vetor} acao={this.remover}/>
            </div>
        )
    }
}

