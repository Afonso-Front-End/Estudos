import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Exemplo from './hooks/Exemplo_useEfect02';
import Exemplo_useEfect02 from './hooks/Exemplo_useEfect02';
import Exemplo_api03 from './hooks/Exemplo_api03';
import Api from './hooks/Api';
import Ibge from './hooks/Ibge';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Ibge/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
