import React, { Component } from 'react'

export default class EjemploSimple extends Component {
    //CREAMOS LAS VARIABLES DE REFERENCIA
    //ESTAS VARIABLE APUNTAN A OBJETOS FORM
    //NO TIENEN EL VALOR DIRECTO DE LA CAJA
    cajanombre = React.createRef();
    cajaedad = React.createRef();

    state = {
        user: null
    }

    recibirDatos = (e) => {
        //DEBEMOS DE CORTAR LA PROPAGACION DEL EVENTO
        e.preventDefault();
        //PARA RECUPERAR EL VALUE DE LAS REFERENCIAS SE HACE ASI:
        // referencia.current.value
        console.log(this.cajanombre.current.value);
        this.setState({
            user: {
                nombre: this.cajanombre.current.value
                , edad: this.cajaedad.current.value
            }
        });
    };

    render() {
        return (
            <div>
                <h1>Ejemplo simple formularios</h1>
                {this.state.user && (<div>
                        <h2 style={{color:"blue"}}>
                        Usuario: {this.state.user.nombre}
                        , Edad: {this.state.user.edad}
                        </h2>
                    </div>)}
                <form onSubmit={this.recibirDatos}>
                    <label>Nombre: </label>
                    <input type="text" ref={this.cajanombre} 
                    onChange={this.recibirDatos}/><br/>
                    <label>Edad: </label>
                    <input type="number" ref={this.cajaedad}
                    onChange={this.recibirDatos}/><br/>
                    <button>
                        Enviar datos
                    </button>
                </form>
            </div>
        )
    }
}
