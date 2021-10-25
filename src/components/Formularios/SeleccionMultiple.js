import React, { Component } from 'react'

export default class SeleccionMultiple extends Component {
    selectmultiple = React.createRef();
    state = {
        seleccionados: ""
    }
    dibujarOptions = () => {
        var options = [];
        for (var i = 1; i<= 10; i++){
            options.push(
                <option key={i} value={"Elemento " + i}>
                    {"Elemento " + i}
                </option>
            );
        }
        return options;
    };

    mostrarSeleccionados = (e) => {
        e.preventDefault();
        var options = this.selectmultiple.current.options;
        var datos = "";
        for (var i = 0; i < options.length; i++){
            if (options[i].selected == true){
                datos += options[i].value + ",";
            }
        }
        this.setState({
            seleccionados: datos
        });
    } ;
    render() {
        return (
            <div>
                <h1>Selección múltiple elementos</h1>
                <form onSubmit={this.mostrarSeleccionados}>
                    <label>Seleccione elementos: </label>
                    <select size="10" multiple 
                    ref={this.selectmultiple}>
                        {this.dibujarOptions()}
                    </select>
                    <button>Mostrar seleccionados</button>
                </form>
                <h1 style={{color:"blue"}}>
                    {this.state.seleccionados}
                </h1>
            </div>
        )
    }
}
