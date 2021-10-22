import React, { Component } from "react";

class Comic extends Component{
    render() {
        return (<React.Fragment>
            <h1 style={{color:"blue"}}>
                {this.props.comic.titulo}
            </h1>
            <button onClick={() => {
                var seleccionado = this.props.comic;
                this.props.seleccionarFavorito(seleccionado);
            }}>
                Seleccionar favorito
            </button>
            <button onClick={() => {
                var index = this.props.index;
                this.props.modificarComic(index);
            }} style={{backgroundColor:"blue", color:"white"}}>
                Modificar Comic
            </button>
            <button onClick={() => {
                var index = this.props.index;
                this.props.eliminarComic(index);
            }} style={{backgroundColor:"red", color: "white"}}>
                Eliminar comic
            </button>
            <h6 style={{color:"orange"}}>
                {this.props.comic.descripcion}
            </h6>
            <img src={this.props.comic.imagen}/>
        </React.Fragment>);
    }
}

export default Comic;