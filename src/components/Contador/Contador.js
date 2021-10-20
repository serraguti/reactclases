//DEBEMOS IMPORTAR SIEMPRE {Component}
//CON JSX
import {Component} from 'react';

//TAMBIEN PODEMOS UTILIZAR functions CON
//SINTAXIS DE JavaScript PARA SEPARAR CODIGO
//LOGICAMENTE, EN ESTA FUNCION NO PODEMOS UTILIZAR
//NADA DE LA CLASE
function miFuncion() {
    console.log("Soy una función fuera de la clase");
}

class Contador extends Component {
    //ZONA DE DECLARACION DE ELEMENTOS DE LA CLASE
    //PARA DECLARAR VARIABLES O METODOS
    //NO SE UTILIZA NI var, const NI NADA
    //VARIABLE A NIVEL DE CLASE (this)
    numero = 1;
    //METODO A NIVEL DE CLASE (this)
    incrementarContador = () => {
        console.log("Contador: " + this.numero);
        this.numero = this.numero + 1;
    };

    //PODEMOS UTILIZAR VARIABLES DE ESTADO
    //Y MODIFICARLAS CUANDO DESEEMOS (DIBUJO)
    //SI DESEAMOS CREAR UNA VARIABLE DE ESTADO DESDE
    //EL INICIO (NO EN UN BUTTON) SE UTILIZA state
    //DE LA CLASE
    //CON state DE LA CLASE, PRIMERO DECLARAMOS
    //LAS VARIABLES DE ESTADO Y LUEGO PODREMOS
    //MODIFICARLAS CON EL METODO setState
    //  state = { variable1: valor1, variable2: valor2 };
    //ASIGNAMOS UN VALOR CONSTANTE
    //state = { valor: 1 };
    //PERO PODEMOS UTILIZAR props
    state = { valor: parseInt(this.props.Inicio) };
    //CREAMOS UN METODO PARA CAMBIAR EL VALOR
    incrementarValor = () => {
        //AQUI LO UNICO QUE DEBEMOS HACER ES CAMBIAR EL
        //ESTADO Y LA VARIABLE valor
        this.setState({
            valor: this.state.valor + 1
        });
    };

    render() {
        //ESTE CODIGO SE ACTUALIZA AL INICIO Y AL CAMBIAR
        //CUALQUIER STATE.  ES IGUAL A UTILIZAR function
        var valor = 14;
        const miMetodoRender = () => {
            valor += 1;
            console.log("Soy un metodo dentro de Render " + valor);
        };
        return (<div>
            <h1>Primer component JSX</h1>
            <h2 style={{color:"blue"}}>
                Inicio: { this.props.Inicio }
            </h2>
            <h2 style={{color:"red"}}>
                Variable estado: {  this.state.valor  }
            </h2>
            {/* Si estamos utilizando METODOS de CLASE
            PODEMOS LLAMARLO CON OTRA SINTAXIS MAS FACIL */}
            <button onClick={this.incrementarValor}>
                Incrementar variable de State
            </button>
            <button onClick={() => {
                //SI EL METODO ESTA EN render()
                //LA LLAMADA SE REALIZA COMO SIEMPRE
                miMetodoRender();
                miFuncion();
                //LOS METODOS Y ELEMENTOS DE CLASE SIEMPRE
                //DEBEN LLEVAR this
                this.incrementarContador();
            }}>Pulsa y haz algo</button>
        </div>);
    }
}

export default Contador;