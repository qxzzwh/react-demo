import React, { Component } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import List from './components/List/List'

export default class App extends Component {
    state = {
        todos: [
            { id: '001', name: 'eat', done: true },
            { id: '002', name: 'sleep', done: true },
            { id: '003', name: 'code', done: false },
            { id: '004', name: 'shopping', done: false }
        ]
    }
    addTodo = (todoObj) => {
        const { todos } = this.state;
        const newTodos = [todoObj, ...todos];
        this.setState({ todos: newTodos });
    }
    updateTodos = (id, done) => {
        const { todos } = this.state;
        const newTodos = todos.map((todoObj) => {
            if (todoObj.id === id) {
                return { ...todoObj, done }
            } else return todoObj
        })
        this.setState({ todos: newTodos });
    }
    deleteTodo = (id) => {
        const { todos } = this.state;
        const newTodos = todos.filter((todoobj) => {
            return todoobj.id !== id
        })
        this.setState({ todos: newTodos });
    }
    checkAllTodos = (done) => {
        const { todos } = this.state;
        const newTodos = todos.map((todoObj) => {
            return { ...todoObj, done }
        })
        this.setState({ todos: newTodos });
    }
    clearAllDone = () => {
        const { todos } = this.state;
        const newTodos = todos.filter((todoObj) => {
            return !todoObj.done;
        })
        this.setState({ todos: newTodos });
    }
    render() {
        const { todos } = this.state
        return (
            <div className='todo-container'>
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo} />
                    <List todos={todos} updateTodo={this.updateTodos} deleteTodo={this.deleteTodo} />
                    <Footer todos={todos} checkAllTodos={this.checkAllTodos} clearAllDone={this.clearAllDone} />
                </div>
            </div>
        )
    }
}
