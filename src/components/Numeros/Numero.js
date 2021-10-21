import React, { Component } from "react";

class Numero extends Component{
    render() {
        return (<React.Fragment>
            <h1 style={{color:"blue"}}>Número hijo: {this.props.numero}</h1>
            <button onClick={() => {
                //LLAMAMOS AL METODO RECIBIDO DESDE EL PADRE
                this.props.sumarNumeros(this.props.numero);
            }}>
                Sumar {this.props.numero}
            </button>
        </React.Fragment>);
    }
}

export default Numero;