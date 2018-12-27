import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const todos = ([todos, setTodos] = useState([
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
  ]));
}

export default App;
