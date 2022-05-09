import React, { Component } from 'react'
import PropTyes from 'prop-types'
import { nanoid } from 'nanoid';
import './Header.css'
export default class Header extends Component {
    static propTypes = {
        addTodo: PropTyes.func.isRequired
    }
    handleKeyup = (e) => {
        const { keyCode, target } = e;
        if (keyCode !== 13) return
        if (target.value.trim() == "") {
            alert("Input required!")
            return;
        }
        const todoObj = { id: nanoid(), name: target.value, done: false };
        this.props.addTodo(todoObj);
        target.value = "";
    }

    render() {
        return (
            <div className='todo-header'>
                <input type="text" onKeyUp={this.handleKeyup} placeholder="Please input task name then press the Enter" />
            </div>
        )
    }
}
