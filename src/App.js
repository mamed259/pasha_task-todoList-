import React, { useState } from "react";
import "./App.css";

function Todo({todo, index, completeTodo, removeTodo}) {
  return (
      <div style={{textDecoration: todo.isComplete ? 'line-through' : ''}}>
          <span>{todo.text}</span>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
  )
}

function TodoForm({addTodo}) {
  const [value, setValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('')
  };

  return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={e => setValue(e.target.value)} />
        <button>Add Todo</button>
      </form>
  )
}

function App() {
  const [todos, setTodos] = useState(
      [
        {
          text: "Mamed",
          isComplete: false
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
  );

  const addTodo = text => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  };

  const removeTodo = index => {
      const newTodos = [...todos];
      newTodos .splice(index, 1);
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isComplete = true;
    setTodos(newTodos);
  };

  return (
      <div className="content">
        <div className="todo-form">
          <TodoForm
              addTodo={addTodo}
          />
        </div>
        <div className="todo-list">
          {todos.map((todo, index, id) =>
            <Todo
              key={index}
              id={id}
              index={index}
              todo={todo}
              completeTodo ={completeTodo}
              removeTodo={removeTodo }
              placeholder = "Add text..."
            />
          )}
        </div>
      </div>
  )
}

export default App;
