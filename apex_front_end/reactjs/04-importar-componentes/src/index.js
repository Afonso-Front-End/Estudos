import React from "react";

import ReactDom from "react-dom";

// importar componentes

import Component01 from "./Componete01";
import Component02 from "./Componete02";

class Principal extends React.Component{
    render(){
        return(
            <div>
                <Component01 />
                <Component02 />
            </div>
        )
    }
}

ReactDom.render(<Principal/>, document.getElementById('root'))