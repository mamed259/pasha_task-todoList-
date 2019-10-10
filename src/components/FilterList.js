import React, { Component } from 'react';
import TodoItem from "./TodoItem";

export class FilterList extends Component {
    render() {
        return (
            <div className="todo-list">
                {this.props.todos.filter(todo => !todo.isComplete).map((todo, index, id) =>
                        <TodoItem
                            key={index}
                            id={id}
                            index={index}
                            todo={todo}
                            completeTodo ={this.completeTodo}
                            removeTodo={this.removeTodo }
                            placeholder = "Add text..."
                        />
                        )}
            </div>
        )
    }
}

export default FilterList;
