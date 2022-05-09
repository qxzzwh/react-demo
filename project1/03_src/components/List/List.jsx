import React, { Component } from 'react'
import PropTyes from 'prop-types'
import Item from '../Item/Item'
import './List.css'
export default class List extends Component {
    static propTypes = {
        todos: PropTyes.array.isRequired,
        updateTodo: PropTyes.func.isRequired,
        deleteTodo: PropTyes.func.isRequired
    }
    render() {
        const { todos, updateTodo, deleteTodo } = this.props;
        return (
            <ul className="todo-main">
                {
                    todos.map((todo) => {
                        return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
                    })
                }
            </ul>

        )
    }
}
