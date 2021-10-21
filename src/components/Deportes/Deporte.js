import React, { Component } from "react";

//COMPONENTE HIJO
class Deporte extends Component {

    //NECESITAMOS UN METODO PARA PODER LLAMAR
    //AL METODO PADRE
    seleccionarFavorito = () => {
        //AQUI LLAMAMOS DE FORMA EXPLICITA AL
        //METODO DE PROPS DEL PARENT
        //NECESITAMOS EL DEPORTE SELECCIONADO
        //DONDE ESTA???
        var depor = this.props.nombre;
        this.props.mostrarFavorito(depor);
    };

    render() {
        return (<React.Fragment>
            <li style={{color:"blue"}}>
                {this.props.nombre}
                <button onClick={() => this.seleccionarFavorito()}>
                    Seleccionar favorito
                </button>
            </li>
        </React.Fragment>);
    }
}

export default Deporte;