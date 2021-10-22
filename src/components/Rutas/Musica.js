import React, { Component } from 'react'
import logomusica from './../../assets/images/coco.jpg';

export default class Musica extends Component {
    render() {
        return (
            <div>
                <h1 style={{color:"red"}}>Con la musica a otra parte</h1>
                <img src={logomusica}
                    style={{width: "350px", height: "300px"}}/>                
            </div>
        )
    }
}
