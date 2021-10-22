import { Component } from "react";
import logohome from './../../assets/images/home.jpg';

class Home extends Component{
    render() {
        return (<div>
            <h1>Estoy en Casita</h1>
            <img src={logohome}
            style={{width: "350px", height: "300px"}}/>
        </div>)
    }
}
export default Home;