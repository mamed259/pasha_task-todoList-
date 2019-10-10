import React, { Component } from 'react';

export class TodoForm extends Component {
    constructor (props) {
        super(props)

        this.state = {
            inputValue: ''
        }
    }

    addTodo = (e) => {
        e.preventDefault();

        if (!this.state.inputValue) return;

        this.props.addTodo(this.state.inputValue);
    }

    render() {
        return (
            <form onSubmit={this.addTodo}>
                <input type="text" value={this.state.inputValue} onChange={e => this.setState({ inputValue: e.target.value })} />
                <button>Add Todo</button>
            </form>
        )
    }
}

export default TodoForm;
