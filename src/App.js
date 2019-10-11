import React, { Component } from "react";
import "./App.css";
import FilterList from "./components/FilterList";
import TodoForm from "./components/TodoForm";

export class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [
                {
                    text: "Mamed",
                    isComplete: true
                },
                {
                    text: "John",
                    isComplete: false
                },
                {
                    text: "Lie",
                    isComplete: false
                }
            ]
        };

        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this)
    }

  addTodo(text) {
        const data = {
            text: text,
            isComplete: false
        };

        const newTodos = this.state.todos.concat(data);
        this.setState({ todos: newTodos });
  };

  removeTodo(index) {
      const newTodos = [...this.state.todos];
      newTodos.splice(index, 1);
      this.setState({ todos: newTodos });
  };

  completeTodo(index) {
    const newTodos = [...this.state.todos];
    newTodos[index].isComplete = !newTodos[index].isComplete;
    console.log(newTodos[index].isComplete);
    this.setState(newTodos);
  };

  render() {
      return (
          <div className="content">
              <div className="todo-form">
                  <TodoForm
                      addTodo={this.addTodo}
                  />
              </div>
              <FilterList
                  todos={this.state.todos}
                  completeTodo={this.completeTodo}
                  removeTodo={this.removeTodo}
              />
          </div>
      )
  }
}

export default App;
