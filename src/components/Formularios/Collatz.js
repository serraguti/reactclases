import React, { Component } from 'react'

export default class Collatz extends Component {
    cajacollatz = React.createRef();

    state = {
        collatz: []
    }

    // mostrarCollatz = (e) => {
    //     e.preventDefault();
    //     var datos = [];
    //     var numero = parseInt(this.cajacollatz.current.value);
    //     datos.push(numero);
    //     while (numero != 1) {
    //         if (numero%2 == 0){
    //             numero = numero / 2;
    //         }else{
    //             numero = numero * 3 + 1;
    //         }
    //         datos.push(numero);
    //     }
    //     this.setState({collatz:datos});
    // };

    mostrarCollatz = (e) => {
        e.preventDefault();
        var datos = [];
        var numero = parseInt(this.cajacollatz.current.value);
        //CAMBIA LO QUE ALMACENAMOS DENTRO DE datos[]
        var contador = 1;
        datos.push(<li key={contador}>{numero}</li>);
        while (numero != 1) {
            if (numero%2 == 0){
                numero = numero / 2;
            }else{
                numero = numero * 3 + 1;
            }
            contador++;
            datos.push(<li key={contador}>{numero}</li>);
        }
        this.setState({collatz:datos});
    };

    render() {
        return (
            <div>
                <h1>Ejemplo Collatz formularios</h1>
                <form onSubmit={this.mostrarCollatz}>
                    <label>Collatz: </label>
                    <input type="number" ref={this.cajacollatz}/>
                    <button>
                        Conjetura Collatz
                    </button>
                </form>
                <hr/>
                <ul>
                    {this.state.collatz}
                    {/* {this.state.collatz.map((num, index)=> {
                        return (<li key={index}>{num}</li>)
                    })} */}
                </ul>
            </div>
        )
    }
}
