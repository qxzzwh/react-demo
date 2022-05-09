import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
    state = {
        users: [],
        isFirst: true,
        isLoading: false,
        err: ""
    };
    saveUsers = (users) => {
        this.setState({ users })
    }
    updateAppState = (stateObj) => {
        this.setState(stateObj)
    }
    render() {
        return (
            <div className="container">
                <Search updateAppState={this.updateAppState}>Search</Search>
                <List {...this.state} ></List>
            </div>
        )
    }
}
