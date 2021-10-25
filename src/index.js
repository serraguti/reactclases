import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import Contador from './components/Contador/Contador';
import DibujosComplejos from './components/DibujosComplejos/DibujosComplejos';
import Deportes from './components/Deportes/Deportes';
import Numeros from './components/Numeros/Numeros';
import Comics from './components/Comics/Comics';
import Router from './components/Router';
import MenuRutas from './components/Rutas/MenuRutas';
import EjemploSimple from './components/Formularios/EjemploSimple';
import Collatz from './components/Formularios/Collatz';
import TablaMultiplicar from './components/Formularios/TablaMultiplicar';
import TablaMultiplicarSelect from './components/Formularios/TablaMultiplicarSelect';
import SeleccionMultiple from './components/Formularios/SeleccionMultiple';

ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <SeleccionMultiple/>
      {/* <Router/> */}
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
