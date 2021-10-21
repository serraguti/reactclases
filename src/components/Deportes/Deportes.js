import { Component } from "react";
import Deporte from "./Deporte";

class Deportes extends Component{
    //DEBEMOS CREAR UN DEPORTE FAVORITO EN
    //STATE PARA PODER CAMBIARLO AL SELECCIONAR
    state = {
        seleccionado: "",
        //AQUI TENDREMOS UN list CON TODOS LOS
        //DEPORTES Y SERA DINAMICO
        deportes: ["Padel", "Petanca", "Curling", "Futbol", "Tenis", "Canicas"]
    };

    //TENEMOS EL METODO DEL PARENT
    mostrarFavorito = (deporteFavorito) => {
        //TENGO QUE RECIBIR ALGO DEL HIJO...
        console.log("Favorito: " + deporteFavorito);
        this.setState({
            seleccionado: deporteFavorito
        });
    };

    insertarDeporte = () => {
        var texto = "jueves";
        texto.toUpperCase(); //APLICAMOS UN METODO
        //PERO NO GUARDAMOS EL VALOR NUEVO DE TEXTO
        console.log(texto); //MINUSCULAS
        this.state.deportes.push("Poker");
        this.setState({
            deportes: this.state.deportes
        });
    };

    render(){
        return (<div>
            <h2>
                Su deporte favorito es: 
                <span style={{color:"red"}}>
                    {this.state.seleccionado}
                </span>
            </h2>
            <button onClick={this.insertarDeporte}>
                Nuevo deporte
            </button>
            <ul>
                {this.state.deportes.map((depor, index) => {
                    return (<Deporte nombre={depor} key={index}
                    mostrarFavorito={this.mostrarFavorito}/>);
                })}
            </ul>
        </div>);
    }
}

export default Deportes;