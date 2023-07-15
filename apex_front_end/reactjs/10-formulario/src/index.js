import React from 'react'

import ReactDOM from 'react-dom'

class Componente extends React.Component{
    render(){
        return(
            <div>
                <h1>Hello</h1>
            </div>
        )
    }
}

ReactDOM.render(<Componente/>, document.getElementById('root'))

