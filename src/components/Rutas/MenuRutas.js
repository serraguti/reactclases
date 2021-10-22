import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MenuRutas extends Component {
    render() {
        return (
            <div>
                <ul style={{display: "inline"}}>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        {/* <NavLink to={"/cine"}>Cine</NavLink> */}
                        <a href="/cine">Cine</a>
                    </li>
                    <li>
                        <a href="/musica">Musica</a>
                    </li>
                    <li>
                        <a href="/television">Television</a>
                    </li>
                </ul>
            </div>
        )
    }
}
