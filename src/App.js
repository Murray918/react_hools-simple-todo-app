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

  const addTodo = () => {
    const newTodos = [...todos, { setTodos }]
    setTodos(newTodos)
  }

   const completeTodo = index => {
      const newTodos = [...todos];
      newTodos[index].isCompleted = !newTodos[index].isCompleted;
      setTodos(newTodos);
   };

  return (
    <div className="app">
      <div className="todo-list">
      <h1>Create a Todo with react hooks</h1>
        { todos.map((todo, index) => (
          <Todo 
              key = { index } 
              index = { index } 
              todo = { todo } 
              completeTodo = { completeTodo }
          />
        )) 
      }
      </div>
    </div>
  );
}

export default App;
