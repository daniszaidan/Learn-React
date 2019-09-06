import React, { Component } from 'react';
import './App.css';

class TodoCard extends Component {
    render() {
        return (
            <div>
                {this.props.title}
            </div>
        )
    }
}

class Todo extends Component {
    state = {
        todos: [
            {
                id: 1,
                title: 'learn react'
            },
            {
                id: 2,
                title: 'learn zero.css'
            }
        ],
        title: ''
    }


    componentDidMount() {

    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.title) {
            return
        }

        const newItem = {
            id: Date.now(),
            title: this.state.title
        };

        const todos = [...this.state.todos, newItem];

        this.setState(
            {
                // todos: this.state.todos.concat(newItem)
                todos: todos
            }
        )
    }

    render() {
        return (
            <div style={{
                width: '100%',
                height: '100vh'
            }}>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={e => {
                        this.setState({ title: e.target.value })

                    }} value={this.state.title} /> <br />
                    <button type='submit'>Add Todo</button>
                </form>
                <div className="todo-body" style={{
                    paddingTop: '50px'
                }}>
                    {this.state.todos.map((todo) => <TodoCard key={todo.id} title={todo.title} />)}
                </div>
            </div>
        )
    }
}

export default Todo;