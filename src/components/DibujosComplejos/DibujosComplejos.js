import { Component } from "react";

class DibujosComplejos extends Component {

    //VAMOS A DECLARAR UN ARRAY EN STATE
    //Y LO RECORREMOS DENTRO DE render()
    state = {
        nombres: ["Marcos", "Antonio", "Lucia", "Adrian", "Gema"]
    };

    insertarNombre = () => {
        //NECESITAMOS CAMBIAR EL STATE
        //SI DESEAMOS AÑADIR UN VALOR A UN ARRAY (push)
        //QUEREMOS ES COMPROBAR SI BASTA CON ACCEDER
        //A State Y UTILIZAR PUSH PARA VISUALIZAR LOS CAMBIOS
        this.state.nombres.push("Nuevo");
        //DEBEMOS IGUALAR EL State PARA VISUALIZAR LOS CAMBIOS
        this.setState({
            nombres: this.state.nombres
        });
    };

    render() {
        return (<div>
            <h1>Dibujos con bucles</h1>
            <button onClick={() => this.insertarNombre()}>
                Insertar nombre
            </button>
            <button onClick={this.insertarNombre}>
                Insertar nombre
            </button>       
            {  this.state.nombres.map((name, index) => {
                //A DIFERENCIA DE EL CODIGO EN METODO
                //AQUI PONDREMOS EL RETURN DIRECTO DEL CODIGO
                //QUE DESEEMOS
                return ( <p key={index}>{name}</p> );
            })}
        </div>);
    }
}

export default DibujosComplejos;