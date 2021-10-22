import React, { Component } from 'react'
import logotv from './../../assets/images/television.png';

export default class Television extends Component {
    render() {
        return (
            <div>
                <h1>Television!!!</h1>
                <img src={logotv}
                    style={{width: "350px", height: "300px"}}/>                  
            </div>
        )
    }
}
