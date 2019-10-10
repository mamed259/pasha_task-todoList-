import React, { Component } from 'react';

export class TodoItem extends Component {
    render() {
        return (
            <div style={{textDecoration: this.props.todo.isComplete ? 'line-through' : ''}}>
                <span>{this.props.todo.text}</span>
                <button onClick={() => this.props.completeTodo(this.props.index)}>Complete</button>
                <button onClick={() => this.props.removeTodo(this.props.index)}>x</button>
            </div>
        )
    }
}

export default TodoItem;
