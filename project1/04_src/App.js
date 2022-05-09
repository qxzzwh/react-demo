import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

    getStudentData = () => {
        axios.get("http://localhost:3000/api1/students").then(
            response => { console.log("get data success", response.data) },
            error => { console.log("get data error", error) }
        )
    }
    getCarData = () => {
        axios.get("http://localhost:3000/api2/cars").then(
            response => { console.log("get data success", response.data) },
            error => { console.log("get data error", error) }
        )
    }
    render() {
        return (
            <div>
                <button onClick={this.getStudentData}>Clieck get data</button>
                <button onClick={this.getCarData}>Clieck get data</button>
            </div>
        )
    }
}
