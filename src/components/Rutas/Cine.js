import React, { Component } from 'react'
import logocine from './../../assets/images/cine.jpg';

export default class Cine extends Component {
    render() {
        return (
            <div>
                <h1 style={{color:"blue"}}>El cine en casa</h1>
                <img src={logocine}
                    style={{width: "350px", height: "300px"}}/>
            </div>
        )
    }
}
