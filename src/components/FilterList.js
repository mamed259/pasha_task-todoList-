import React, { Component } from 'react';
import TodoItem from "./TodoItem";

export class FilterList extends Component {


    render() {
        return (
            <div className="todo-list">
                <p>All</p>
                {this.props.todos.map((todo, index) =>
                    <TodoItem
                        key={index}
                        index={index}
                        todo={todo}
                        completeTodo ={this.props.completeTodo}
                        removeTodo={this.props.removeTodo}
                    />
                )}

                <br/>
                <p>Only Done</p>
                {this.props.todos.map((todo, index) => {
                        if(todo.isComplete){
                            return  <TodoItem
                                key={index}
                                index={index}
                                todo={todo}
                                completeTodo ={this.props.completeTodo}
                                removeTodo={this.props.removeTodo}
                            />
                        }
                    }

                )}

                <br/>
                <p>Only Left to do</p>
                {this.props.todos.map((todo, index) => {
                        if(!todo.isComplete){
                            return  <TodoItem
                                key={index}
                                index={index}
                                todo={todo}
                                completeTodo ={this.props.completeTodo}
                                removeTodo={this.props.removeTodo}
                            />
                        }
                    }
                )}
            </div>
        )
    }
}

export default FilterList;
