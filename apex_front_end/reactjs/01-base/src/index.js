// Importar modulo
import React from 'react';
import ReactDOM from 'react-dom';


// Estrutura
const estrutura = 
<div>
    <h1>Meu primeiro render</h1> 
    <p>Testando...</p>
</div>


// Importar rendrn
ReactDOM.render(
    estrutura,
    document.getElementById('root')
);