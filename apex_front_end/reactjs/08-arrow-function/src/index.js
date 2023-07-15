import React from 'react'

import ReactDOM from 'react-dom'

class Componente extends React.Component {

    // Arrow Function

    minhaArrowFunction = (curso) => {
        alert('Curso de ' + curso)
        console.log(this)
    }

    render() {
        return (
            <div>
                <button onClick={() => this.minhaArrowFunction('React JS')}>Arrow function</button>
            </div>
        )
    }
}

ReactDOM.render(<Componente />, document.getElementById('root'))