import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
    cajanumero = React.createRef();

    state = {
        tabla: []
    }

    mostrarTabla = (e) => {
        e.preventDefault();
        var numero = parseInt(this.cajanumero.current.value);
        var lista = [];
        for (var i = 1; i <= 10; i++){
            var multi = numero * i;
            lista.push(multi);
        }
        this.setState({ tabla: lista});
    };

    render() {
        return (
            <div>
                <h1>Tabla multiplicar forms</h1>
                <form onSubmit={this.mostrarTabla}>
                    <label>Número: </label>
                    <input type="text" ref={this.cajanumero}/>
                    <button>
                        Mostrar tabla
                    </button>
                </form>
                <hr/>
                <ul>
                    {this.state.tabla.map((num, index) => {
                        return (<li key={index}>{num}</li>);
                    })}
                </ul>
            </div>
        )
    }
}
