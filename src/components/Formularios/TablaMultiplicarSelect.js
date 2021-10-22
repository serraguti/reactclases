import React, { Component } from 'react'

export default class TablaMultiplicarSelect extends Component {
    optionseleccionado = React.createRef();

    state = {
        filas: []
    }

    //METODO PARA EL FORMULARIO
    mostrarTabla = (e) => {
        e.preventDefault();
        var numero = parseInt(this.optionseleccionado.current.value);
        var datos = [];
        for (var i = 1; i <= 10; i++){
            var multi = numero * i;
            datos.push(<tr key={i}>
                <td>{ numero + " * " + i }</td>
                <td>{multi}</td>
            </tr>);
        }
        this.setState({filas:datos});
    };

    //METODO PARA CARGAR LOS OPTIONS AL INICIO
    generarOptions = () => {
        var options = [];
        for (var i = 1; i <= 5; i++){
            var aleat = Math.round((Math.random() * 50) + 1);
            options.push(<option key={i} value={aleat}>
                {aleat}
            </option>);
        }
        return options;
    };

    render() {
        return (
            <div>
                <h1>Tabla Multiplicar form select</h1>
                <form onSubmit={this.mostrarTabla}>
                    <label>Seleccione un número: </label>
                    <select ref={this.optionseleccionado}>
                        {this.generarOptions()}
                    </select>
                    <button>
                        Mostrar tabla
                    </button>
                </form>
                <hr/>
                <table border="2">
                    <thead>
                        <tr>
                            <th>Operación</th>
                            <th>Resultado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.filas}
                    </tbody>
                </table>
            </div>
        )
    }
}
