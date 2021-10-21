import { Component } from "react";
import Numero from "./Numero";

class Numeros extends Component{

    state = {
        enteros: [14, 22],
        suma: 0
    }

    //METODO PARA PODER SUMAR NUMEROS
    //DESDE UN COMPONENTE HIJO
    //NECESITAMOS RECIBIR EL numero DE
    //CADA HIJO
    sumarNumeros = (numero) => {
        this.setState({
            suma: this.state.suma + numero
        });
    };

    nuevoNumero = () => {
        var aleatorio = Math.round((Math.random() * 99)+ 1);
        this.state.enteros.push(aleatorio);
        this.setState({
            enteros: this.state.enteros
        });
    }

    render(){
        return (<div>
            <h1>Numeros Padre</h1>
            <h2 style={{color:"red"}}>
                La suma es: {this.state.suma}
            </h2>
            <button onClick={() => this.nuevoNumero()}>
                Nuevo Número
            </button>
            {this.state.enteros.map((entero, index) => {
                return (<Numero numero={entero} key={index}
                sumarNumeros={this.sumarNumeros}/>);
            })}
        </div>);
    }
}
export default Numeros;