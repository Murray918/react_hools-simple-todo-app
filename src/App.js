import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from './todo'
import TodoFrom from './todo_form'


function App() {
  const [todos, setTodos] = useState([
    {
      text: "React Hooks in Depth",
      isCompleted: false
    },
    {
      text: "Write Articles @ Medium",
      isCompleted: false
    },
    {
      text: "Share article at Reddit",
      isCompleted: false
    }
  ])
  return (
    <div className="app">
      <div className="todo-list">
      <h1>Create a Todo with react hooks</h1>
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default App;
