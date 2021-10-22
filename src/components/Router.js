import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Cine from './Rutas/Cine'
import Home from './Rutas/Home'
import MenuRutas from './Rutas/MenuRutas'
import Musica from './Rutas/Musica'
import Television from './Rutas/Television'
//TODOS LOS COMPONENTES A NAVEGAR

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                {/* <MenuRutas/> */}
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cine" component={Cine}/>
                    <Route path="/musica" component={Musica}/>
                    <Route path="/television" component={Television}/>
                </Switch>
            </BrowserRouter>
        )
    }
}
