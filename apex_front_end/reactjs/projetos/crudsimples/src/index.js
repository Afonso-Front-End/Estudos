// import ReactDOM from 'react-dom'
// import Principal from './Principal'

// // Importar componente principal
// ReactDOM.render(<Principal/>, document.getElementById('root'))

import { createRoot } from 'react-dom/client';

import Principal from './Principal';

const elemento = document.getElementById('root')
const root = createRoot(elemento)
root.render(<Principal/>)